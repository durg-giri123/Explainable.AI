import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-foreground">Smart Quest Core</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Open the Smart Quest Core app via the link below.
        </p>
        <a
          href="https://smart-quest-core.lovable.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Visit Smart Quest Core →
        </a>
      </div>
    </main>
  );
}
