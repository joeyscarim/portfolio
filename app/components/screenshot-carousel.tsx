"use client";

import { useRef } from "react";

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

export function ScreenshotCarousel({
  count,
  projectName,
}: {
  count: number;
  projectName: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

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
        {Array.from({ length: count }, (_, index) => {
          const bars = skeletons[index % skeletons.length];
          return (
            <div
              key={index}
              data-shot
              className="w-40 shrink-0 snap-start overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80"
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
        })}
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
