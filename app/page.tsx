export default function Home() {
  return (
    <div className="min-h-full bg-white font-sans">
      <main className="mx-auto max-w-2xl px-4 md:px-6 pt-12 md:pt-16 pb-16">
        <h1 className="mb-8 text-2xl md:text-3xl font-normal text-zinc-600">
          Hey, I&apos;m Joey 👋 I make apps.
        </h1>

        <div className="mb-8 bg-sky-400 py-2 text-center text-sm md:text-base text-white">
          Joey Scarim / Web & App Developer / Denver, CO
        </div>

        <div className="mb-8">
          <p className="mb-2 text-zinc-800">I work primarily with:</p>
          <ul className="list-disc space-y-0.5 pl-5 text-zinc-800">
            <li>TypeScript/JavaScript (React, React Native)</li>
            <li>Node.js (Next.js)</li>
            <li>HTML/CSS (Tailwind, shadcn/ui)</li>
            <li>Lots of data (BigQuery, dltHub, Posthog)</li>
          </ul>
        </div>

        <p className="mb-8 leading-relaxed text-zinc-800">
          I studied Computer Science at the University of Arizona and currently
          work on{" "}
          <a
            href="https://getflowos.com"
            className="text-sky-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            FlowOS
          </a>
          , an AI-powered funnel building and ad-attribution platform that helps
          small-to-medium businesses drive more engagement and convert more
          customers.
        </p>

        <a
          href="https://github.com/joeyscarim"
          className="text-sky-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit me on Github
        </a>
      </main>
    </div>
  );
}
