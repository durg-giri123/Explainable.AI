import { createFileRoute } from "@tanstack/react-router";

const TARGET_URL = "https://smart-quest-core.lovable.app/";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (typeof window !== "undefined") {
      window.location.replace(TARGET_URL);
    }
  },
  component: Index,
});

function Index() {
  if (typeof window !== "undefined") {
    window.location.replace(TARGET_URL);
  }
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <p className="text-sm text-muted-foreground">Redirecting to Smart Quest Core…</p>
    </main>
  );
}
