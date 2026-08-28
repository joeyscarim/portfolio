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
  url,
}: {
  description?: string;
  role?: string;
  stack?: string;
  status?: string;
  url?: string;
}) {
  const statusClass =
    status === "Active"
      ? "bg-emerald-50 text-emerald-700 ring-emerald-100"
      : status === "Exited"
        ? "bg-orange-100 text-orange-700 ring-orange-200"
        : status === "Retired"
          ? "bg-zinc-100 text-zinc-600 ring-zinc-200/80"
          : "bg-zinc-100 text-zinc-600 ring-zinc-200/80";

  const linkLabel = url
    ? url.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

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
        <dd className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span
            className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ring-1 ${statusClass}`}
          >
            {status ?? "—"}
          </span>
          {status === "Active" && linkLabel ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-800"
            >
              {linkLabel}
              <ExternalLinkIcon />
            </a>
          ) : null}
        </dd>
      </dl>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="size-3.5"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5M19 5l-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
  const [openedOnce, setOpenedOnce] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    const isOpen = openProjects.has(id);
    if (!isOpen) {
      setOpenedOnce((seen) => {
        if (seen.has(id)) return seen;
        const next = new Set(seen);
        next.add(id);
        return next;
      });
    }
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
            <span className="text-sky-700">{company.name}</span>{" "}
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
                    className="flex w-full cursor-pointer items-center gap-3 py-3 text-left"
                  >
                    <Image
                      src={project.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="size-10 shrink-0 rounded-xl object-cover ring-1 ring-zinc-200"
                    />
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
                          url={project.url}
                        />
                        {openedOnce.has(id) ? (
                          <ScreenshotCarousel
                            images={project.screenshots}
                            projectName={project.name}
                            wide={project.wideScreenshots}
                          />
                        ) : null}
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
