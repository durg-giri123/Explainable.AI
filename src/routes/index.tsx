import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Brain,
  ShieldCheck,
  Activity,
  Sparkles,
  HeartPulse,
  LineChart,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NeuroScan AI — Early Detection & Preventive Brain Health" },
      {
        name: "description",
        content:
          "NeuroScan AI uses advanced models for early detection of neurological risk and personalized preventive guidance.",
      },
      { property: "og:title", content: "NeuroScan AI" },
      {
        property: "og:description",
        content:
          "Early detection and preventive insights for brain health, powered by AI.",
      },
    ],
  }),
  component: Landing,
});

const features = [
  {
    icon: Brain,
    title: "AI-Powered Screening",
    body: "Answer a guided assessment and let our models surface early signals across cognitive, behavioral, and lifestyle markers.",
  },
  {
    icon: Activity,
    title: "Early Detection",
    body: "Identify subtle patterns long before they become symptoms — earlier action means better outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Measures",
    body: "Get a personalized plan: nutrition, sleep, cognitive training, and screening cadence tailored to your risk profile.",
  },
  {
    icon: LineChart,
    title: "Track Your Progress",
    body: "Your dashboard tracks scans over time, so you and your clinician can see how lifestyle changes move the needle.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Brain Health",
    body: "Cardio, metabolic and sleep inputs feed the model — because brain health is whole-body health.",
  },
  {
    icon: Sparkles,
    title: "Private by Default",
    body: "Your data is encrypted and only ever visible to you. You control what's shared and with whom.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <Brain className="h-5 w-5 text-primary" />
            NeuroScan AI
          </Link>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-primary" />
            Early detection. Personalized prevention.
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Understand your brain health,
            <br />
            <span className="text-primary">years earlier.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            NeuroScan AI combines guided assessments with advanced models to
            surface early neurological risk signals — and gives you a
            personalized plan to act on them.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/signup">Start free assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/login">I have an account</Link>
            </Button>
          </div>
        </section>

        <section className="border-t bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-3xl font-bold tracking-tight">
              Everything you need to stay ahead
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
              From the first screening to long-term prevention, NeuroScan AI is
              built around your trajectory — not a single moment in time.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-lg border bg-card p-6 shadow-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Create your free account and complete your first NeuroScan in
              under five minutes.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link to="/signup">Create your account</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} NeuroScan AI. All rights reserved.</p>
          <p>For informational purposes — not a medical diagnosis.</p>
        </div>
      </footer>
    </div>
  );
}
