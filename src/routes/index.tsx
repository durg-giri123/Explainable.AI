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
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Brain className="h-4 w-4" />
            </div>
            NeuroScan AI
          </Link>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button
              asChild
              className="text-white hover:opacity-90"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Link to="/signup">Get started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <Sparkles className="h-3 w-3 text-primary" />
              Early detection. Personalized prevention.
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Understand your brain health,
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                years earlier.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
              NeuroScan AI combines guided assessments with advanced models to
              surface early neurological risk signals — and gives you a
              personalized plan to act on them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 text-base text-white hover:opacity-90"
                style={{
                  background: "var(--gradient-brand)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                <Link to="/signup">Start free assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base">
                <Link to="/login">I have an account</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required · ~5 minutes
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t bg-muted/30 py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Everything you need to stay ahead
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                From the first screening to long-term prevention, NeuroScan AI is
                built around your trajectory — not a single moment in time.
              </p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-110"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How it works</h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Three simple steps to take control of your brain health.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                { n: "01", t: "Create your account", d: "Sign up in seconds — your data is encrypted from the first keystroke." },
                { n: "02", t: "Complete your scan", d: "Guided cognitive, sleep, and lifestyle assessments take about 5 minutes." },
                { n: "03", t: "Get your plan", d: "Receive a personalized preventive plan and track progress on your dashboard." },
              ].map((s) => (
                <div key={s.n} className="relative rounded-xl border bg-card p-6">
                  <span
                    className="text-4xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-24">
          <div
            className="relative overflow-hidden rounded-3xl p-12 text-center text-white"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <h2 className="relative text-3xl font-bold tracking-tight md:text-4xl">
              Ready to take the first step?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-white/85">
              Create your free account and complete your first NeuroScan in under five minutes.
            </p>
            <Button asChild size="lg" variant="secondary" className="relative mt-6 h-12 px-8 text-base">
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
