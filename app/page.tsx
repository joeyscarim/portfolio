import { ProjectList } from "@/app/components/project-list";

export default function Home() {
  return (
    <div className="min-h-full bg-white font-sans">
      <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16 md:flex-row md:items-start md:gap-16">
        <aside className="w-full shrink-0 md:sticky md:top-16 md:w-56 lg:w-64">
          <h1 className="text-2xl text-zinc-800">Joey Scarim</h1>
          <p className="mt-1 text-zinc-500">Software Engineer</p>
          <p className="text-zinc-500">Denver, CO</p>

          <div className="mt-6 aspect-square w-full max-w-56 rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/80">
            <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-400">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="size-12"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path
                  d="M5 19.5c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xs">Photo</span>
            </div>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            <a
              href="https://github.com/joeyscarim"
              className="text-sky-400 hover:text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/joeyscarim"
              className="text-sky-400 hover:text-sky-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" className="text-sky-400 hover:text-sky-500">
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
