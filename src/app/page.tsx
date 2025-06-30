import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#f9f9f9] dark:bg-[#0a0a0a] text-center">
      <main className="flex flex-col gap-8 row-start-2 items-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
          Welcome to the CopilotKit Playground
        </h1>
        <p className="text-lg text-muted-foreground px-4 sm:px-0">
          This project is a testing ground for working with LangGraph agents, CopilotKit chat interfaces, and frontend-backend AI workflows.
        </p>

        <Link
          href="/copilotkit"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-medium text-base px-6 py-3"
        >
          🚀 Launch the Agent Demo
        </Link>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-muted-foreground">
        <a
          href="https://copilotkit.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          CopilotKit Docs
        </a>
        <a
          href="https://github.com/langchain-ai/langgraph"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LangGraph GitHub
        </a>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Hosted on Vercel
        </a>
      </footer>
    </div>
  );
}
