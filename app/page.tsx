import Image from "next/image";
import { ProjectList } from "@/app/components/project-list";

export default function Home() {
  return (
    <div className="min-h-full bg-white font-sans">
      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:gap-14">
        <aside className="w-full shrink-0 md:sticky md:top-16 md:w-52 lg:w-60">
          <div className="flex items-center gap-4 md:flex-col-reverse md:items-stretch md:gap-0">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80 md:mt-6 md:aspect-square md:size-auto md:w-full">
              <Image
                src="/profile.jpg"
                alt="Joey Scarim"
                fill
                priority
                sizes="(max-width: 767px) 96px, 240px"
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl text-sky-700">Joey Scarim</h1>
              <p className="mt-1 text-zinc-500">Software Engineer</p>
              <p className="text-sm text-zinc-500">Denver, CO</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Since studying computer science at the University of Arizona, I’ve
            spent 10+ years on small teams building products end to end.
          </p>

          <nav className="mt-4 flex flex-row flex-wrap items-center gap-x-1 gap-y-1">
            <a
              href="https://github.com/joeyscarim"
              className="text-sky-700 hover:text-sky-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <span className="text-zinc-400">/</span>
            <a
              href="https://www.linkedin.com/in/joeyscarim"
              className="text-sky-700 hover:text-sky-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-zinc-400">/</span>
            <a
              href="/joey_scarim_resume.pdf"
              className="text-sky-700 hover:text-sky-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </aside>

        <section className="min-w-0 flex-1">
          <ProjectList />
        </section>
      </main>
    </div>
  );
}
