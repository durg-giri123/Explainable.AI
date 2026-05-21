import { Link } from "@tanstack/react-router";
import { Brain, ShieldCheck, Activity, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Brand panel */}
      <div
        className="relative hidden lg:flex flex-col justify-between p-12 text-white overflow-hidden"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <Link to="/" className="relative flex items-center gap-2 text-lg font-bold">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur">
            <Brain className="h-5 w-5" />
          </div>
          NeuroScan AI
        </Link>

        <div className="relative space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Understand your brain health, <em className="not-italic text-white/80">years earlier.</em>
          </h2>
          <p className="text-white/80 max-w-md">
            AI-driven screening, early detection, and a personalized preventive plan — all in one place.
          </p>
          <ul className="space-y-3 text-sm">
            {[
              { icon: Activity, text: "Early detection of neurological risk signals" },
              { icon: ShieldCheck, text: "Personalized preventive measures" },
              { icon: Sparkles, text: "Private, encrypted, and yours alone" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 backdrop-blur">
                  <Icon className="h-4 w-4" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-white/60">
          For informational purposes — not a medical diagnosis.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden mb-8 flex items-center gap-2 font-bold text-foreground">
            <Brain className="h-5 w-5 text-primary" />
            NeuroScan AI
          </Link>
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}