"use client";

import Image from "next/image";
import { useState } from "react";
import { companies } from "@/app/data/work";
import { ScreenshotCarousel } from "@/app/components/screenshot-carousel";

function ProjectInfoCard({
  description,
  role,
  stack,
  status,
}: {
  description?: string;
  role?: string;
  stack?: string;
  status?: string;
}) {
  const statusClass =
    status === "Active"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
      : status === "Exited"
        ? "bg-amber-50 text-amber-800 ring-amber-100"
        : "bg-zinc-100 text-zinc-600 ring-zinc-200/80";

  return (
    <div className="mb-4 rounded-xl bg-zinc-50 px-4 py-3 text-sm ring-1 ring-zinc-200/70">
      {description ? (
        <p className="mb-2 text-zinc-700">{description}</p>
      ) : null}
      <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-2 gap-y-1.5">
        <dt className="text-zinc-400">Role</dt>
        <dd className="text-zinc-800">{role ?? "—"}</dd>
        <dt className="text-zinc-400">Stack</dt>
        <dd className="text-zinc-800">{stack ?? "—"}</dd>
        <dt className="text-zinc-400">Status</dt>
        <dd>
          <span
            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${statusClass}`}
          >
            {status ?? "—"}
          </span>
        </dd>
      </dl>
    </div>
  );
}

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
            {company.projects
              .filter((project) => !project.hidden)
              .map((project) => {
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
                        <ProjectInfoCard
                          description={project.description}
                          role={project.role}
                          stack={project.stack}
                          status={project.status}
                        />
                        <ScreenshotCarousel
                          images={project.screenshots}
                          projectName={project.name}
                          wide={project.wideScreenshots}
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
