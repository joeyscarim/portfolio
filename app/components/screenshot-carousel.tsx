"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PLACEHOLDER_COUNT = 5;

function shotIsWide(src: string, wide = false) {
  if (src.includes("/ticket.")) return false;
  return wide || src.includes("/web-");
}

function shotSize(src: string, wide: boolean, kind: "preview" | "lightbox") {
  const landscape = shotIsWide(src, wide);
  if (kind === "lightbox") {
    return {
      width: landscape ? 1600 : 800,
      height: landscape ? 1000 : 1600,
      sizes: "90vw",
    };
  }
  return {
    width: landscape ? 1024 : 472,
    height: landscape ? 600 : 1024,
    sizes: landscape ? "420px" : "180px",
  };
}

const skeletons = [
  ["w-2/3", "w-full", "w-5/6", "w-1/2"],
  ["w-1/2", "w-4/5", "w-full", "w-2/3"],
  ["w-full", "w-1/3", "w-5/6", "w-3/4"],
  ["w-3/4", "w-full", "w-1/2", "w-5/6"],
  ["w-5/6", "w-2/3", "w-full", "w-1/3"],
];

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function PlaceholderShot({
  projectName,
  index,
}: {
  projectName: string;
  index: number;
}) {
  const bars = skeletons[index % skeletons.length];

  return (
    <div
      data-shot
      className="flex aspect-[9/16] h-64 w-auto shrink-0 snap-start overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100"
    >
      <div className="flex aspect-[9/16] flex-col p-3">
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-zinc-300" />
        <div className="mb-3 h-24 rounded-xl bg-zinc-200" />
        <div className="flex flex-1 flex-col gap-2">
          {bars.map((width) => (
            <div
              key={width}
              className={`h-2 rounded-full bg-zinc-200 ${width}`}
            />
          ))}
        </div>
        <p className="mt-auto pt-3 text-center text-[10px] text-zinc-400">
          {projectName} {index + 1}
        </p>
      </div>
    </div>
  );
}

function Lightbox({
  shots,
  index,
  projectName,
  wide,
  onClose,
  onPrev,
  onNext,
}: {
  shots: string[];
  index: number;
  projectName: string;
  wide: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const hasMultiple = shots.length > 1;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        event.stopPropagation();
        onPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        event.stopPropagation();
        onNext();
      }
    }

    window.addEventListener("keydown", onKey, true);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey, true);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${projectName} screenshot ${index + 1}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close screenshot"
        className="absolute top-4 right-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md hover:bg-white"
      >
        <CloseIcon />
      </button>

      {hasMultiple ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          aria-label={`Previous ${projectName} screenshot`}
          className="absolute left-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md hover:bg-white"
        >
          <ChevronLeft />
        </button>
      ) : null}

      <Image
        src={shots[index]}
        alt={`${projectName} screenshot ${index + 1}`}
        {...shotSize(shots[index], wide, "lightbox")}
        quality={90}
        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />

      {hasMultiple ? (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label={`Next ${projectName} screenshot`}
          className="absolute right-4 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md hover:bg-white"
        >
          <ChevronRight />
        </button>
      ) : null}
    </div>
  );
}

export function ScreenshotCarousel({
  images,
  projectName,
  wide = false,
}: {
  images?: string[];
  projectName: string;
  wide?: boolean;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [previewsReady, setPreviewsReady] = useState(false);
  const loadedPreviews = useRef(0);
  const shots = images ?? [];
  const hasImages = shots.length > 0;

  const markPreviewSettled = useCallback(() => {
    loadedPreviews.current += 1;
    if (loadedPreviews.current >= shots.length) {
      setPreviewsReady(true);
    }
  }, [shots.length]);

  useEffect(() => {
    if (!hasImages || previewsReady) return;
    const timeout = window.setTimeout(() => setPreviewsReady(true), 3000);
    return () => window.clearTimeout(timeout);
  }, [hasImages, previewsReady]);

  const updateScrollState = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    setCanScrollPrev(scroller.scrollLeft > 1);
    setCanScrollNext(scroller.scrollLeft < maxScroll - 1);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });

    const imagesInScroller = scroller.querySelectorAll("img");
    imagesInScroller.forEach((image) => {
      if (!image.complete) image.addEventListener("load", updateScrollState);
    });

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(scroller);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      imagesInScroller.forEach((image) => {
        image.removeEventListener("load", updateScrollState);
      });
      observer.disconnect();
    };
  }, [updateScrollState, shots.length]);

  function scrollByCard(direction: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-shot]");
    const gap = 12;
    const amount = (card?.offsetWidth ?? 160) + gap;
    scroller.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const stepLightbox = useCallback(
    (direction: number) => {
      setLightboxIndex((current) => {
        if (current === null || shots.length === 0) return current;
        return (current + direction + shots.length) % shots.length;
      });
    },
    [shots.length],
  );

  const prevLightbox = useCallback(() => stepLightbox(-1), [stepLightbox]);
  const nextLightbox = useCallback(() => stepLightbox(1), [stepLightbox]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || lightboxIndex === null) return;
    const previousOverflow = scroller.style.overflow;
    scroller.style.overflow = "hidden";
    return () => {
      scroller.style.overflow = previousOverflow;
    };
  }, [lightboxIndex]);

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto p-px pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {hasImages
          ? shots.map((src, index) => {
              return (
                <button
                  key={src}
                  type="button"
                  data-shot
                  onClick={() => setLightboxIndex(index)}
                  className="flex h-64 w-auto shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100"
                >
                  <Image
                    src={src}
                    alt={`${projectName} screenshot ${index + 1}`}
                    {...shotSize(src, wide, "preview")}
                    quality={90}
                    loading="eager"
                    fetchPriority={index === 0 ? "high" : "low"}
                    className="h-full w-auto max-w-none"
                    style={{ width: "auto", height: "100%" }}
                    onLoad={markPreviewSettled}
                    onError={markPreviewSettled}
                  />
                </button>
              );
            })
          : Array.from({ length: PLACEHOLDER_COUNT }, (_, index) => (
              <PlaceholderShot
                key={index}
                projectName={projectName}
                index={index}
              />
            ))}
      </div>

      {previewsReady
        ? shots.map((src) => (
            <Image
              key={`lightbox-${src}`}
              src={src}
              alt=""
              {...shotSize(src, wide, "lightbox")}
              quality={90}
              loading="eager"
              className="pointer-events-none fixed top-0 left-0 h-px w-px opacity-0"
              aria-hidden
            />
          ))
        : null}

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={!canScrollPrev}
        aria-label={`Previous ${projectName} screenshot`}
        className={`absolute top-1/2 left-2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-600 shadow-md ring-1 ring-zinc-200 ${
          canScrollPrev
            ? "cursor-pointer hover:bg-zinc-50"
            : "cursor-default opacity-50"
        }`}
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={!canScrollNext}
        aria-label={`Next ${projectName} screenshot`}
        className={`absolute top-1/2 right-2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-zinc-600 shadow-md ring-1 ring-zinc-200 ${
          canScrollNext
            ? "cursor-pointer hover:bg-zinc-50"
            : "cursor-default opacity-50"
        }`}
      >
        <ChevronRight />
      </button>

      {mounted && lightboxIndex !== null
        ? createPortal(
            <Lightbox
              shots={shots}
              index={lightboxIndex}
              projectName={projectName}
              wide={wide}
              onClose={closeLightbox}
              onPrev={prevLightbox}
              onNext={nextLightbox}
            />,
            document.body,
          )
        : null}
    </div>
  );
}
