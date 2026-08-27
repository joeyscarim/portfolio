"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const PLACEHOLDER_COUNT = 5;

function shotIsWide(src: string, wide = false) {
  return wide || src.includes("/web-");
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
      className="flex h-64 w-auto shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80 aspect-[9/16]"
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

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
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
        className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md hover:bg-white"
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
          className="absolute left-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md hover:bg-white"
        >
          <ChevronLeft />
        </button>
      ) : null}

      <Image
        src={shots[index]}
        alt={`${projectName} screenshot ${index + 1}`}
        width={shotIsWide(shots[index], wide) ? 1600 : 800}
        height={shotIsWide(shots[index], wide) ? 1000 : 1600}
        sizes="90vw"
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
          className="absolute right-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/95 text-zinc-700 shadow-md hover:bg-white"
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
  const shots = images ?? [];
  const hasImages = shots.length > 0;

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {hasImages
          ? shots.map((src, index) => {
              const landscape = shotIsWide(src, wide);
              return (
                <button
                  key={src}
                  type="button"
                  data-shot
                  onClick={() => setLightboxIndex(index)}
                  className="flex h-64 w-auto shrink-0 cursor-zoom-in snap-start overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80"
                >
                  <Image
                    src={src}
                    alt={`${projectName} screenshot ${index + 1}`}
                    width={landscape ? 1024 : 472}
                    height={landscape ? 600 : 1024}
                    sizes={landscape ? "420px" : "180px"}
                    quality={90}
                    className="h-full w-auto max-w-none"
                    style={{ width: "auto", height: "100%" }}
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

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label={`Previous ${projectName} screenshot`}
        className="absolute top-1/2 left-2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-zinc-600 shadow-md ring-1 ring-zinc-200 hover:bg-white"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label={`Next ${projectName} screenshot`}
        className="absolute top-1/2 right-2 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-zinc-600 shadow-md ring-1 ring-zinc-200 hover:bg-white"
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
