"use client";

import Image from "next/image";
import { useState } from "react";
import { companies } from "@/app/data/work";
import { ScreenshotCarousel } from "@/app/components/screenshot-carousel";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`size-5 shrink-0 text-zinc-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ProjectList() {
  const [openProjects, setOpenProjects] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenProjects((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-10">
      {companies.map((company) => (
        <section key={company.name}>
          <h2 className="text-lg text-zinc-800">
            {company.name}{" "}
            <span className="text-zinc-400">/</span> {company.role}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">{company.dates}</p>

          <ul className="mt-4 divide-y divide-zinc-100">
            {company.projects.map((project) => {
              const id = `${company.name}-${project.name}`;
              const open = openProjects.has(id);

              return (
                <li key={project.name}>
                  <button
                    type="button"
                    onClick={() => toggle(id)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-3 py-3 text-left"
                  >
                    {project.icon ? (
                      <Image
                        src={project.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="size-10 shrink-0 rounded-xl object-cover ring-1 ring-zinc-200"
                      />
                    ) : (
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-medium text-white ${project.accent}`}
                      >
                        {project.initial}
                      </span>
                    )}
                    <span className="min-w-0 flex-1 text-zinc-800">
                      {project.name}
                    </span>
                    <ChevronDown open={open} />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-1 pt-1 pb-5">
                        <ScreenshotCarousel
                          images={project.screenshots}
                          projectName={project.name}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
