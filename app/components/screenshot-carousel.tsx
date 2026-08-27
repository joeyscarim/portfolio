"use client";

import Image from "next/image";
import { useRef } from "react";

const PLACEHOLDER_COUNT = 5;

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
  const shots = images ?? [];
  const hasImages = shots.length > 0;

  function scrollByCard(direction: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-shot]");
    const gap = 12;
    const amount = (card?.offsetWidth ?? 160) + gap;
    scroller.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {hasImages
          ? shots.map((src, index) => (
              <div
                key={src}
                data-shot
                className="flex h-64 w-auto shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80"
              >
                <Image
                  src={src}
                  alt={`${projectName} screenshot ${index + 1}`}
                  width={wide ? 1024 : 472}
                  height={wide ? 600 : 1024}
                  className="h-full w-auto max-w-none"
                  style={{ width: "auto", height: "100%" }}
                />
              </div>
            ))
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
    </div>
  );
}
