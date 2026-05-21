import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard")({
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      throw redirect({ to: "/login" });
    }
  },
  component: DashboardPage,
});

type Profile = {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
};

function DashboardPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: userRes } = await supabase.auth.getUser();
      const user = userRes.user;
      if (!user) return;
      setEmail(user.email ?? "");
      const { data, error } = await supabase
        .from("profiles")
        .select("id, display_name, avatar_url")
        .eq("id", user.id)
        .maybeSingle();
      if (error) toast.error(error.message);
      if (data) {
        setProfile(data);
        setDisplayName(data.display_name ?? "");
      }
      setLoading(false);
    })();
  }, []);

  const onSave = async () => {
    if (!profile) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName })
      .eq("id", profile.id);
    setSaving(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Profile updated");
  };

  const onSignOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  };

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
          <Button variant="outline" onClick={onSignOut}>Sign out</Button>
        </div>

        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Your profile</h2>
          <p className="mt-1 text-sm text-muted-foreground">Update your display name.</p>
          <div className="mt-4 space-y-2">
            <Label htmlFor="display_name">Display name</Label>
            <Input
              id="display_name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              disabled={loading}
            />
          </div>
          <Button className="mt-4" onClick={onSave} disabled={saving || loading}>
            {saving ? "Saving…" : "Save changes"}
          </Button>
        </section>

        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Your NeuroScan</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Start a new screening to check for early signals across cognitive,
            sleep, and lifestyle markers.
          </p>
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            onClick={() => toast.info("New scan flow coming soon")}
          >
            Start new scan
          </button>
        </section>

        <section className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">Preventive plan</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>• 7–9 hours of consistent sleep per night</li>
            <li>• 150 min/week aerobic activity</li>
            <li>• Mediterranean-style nutrition</li>
            <li>• 10 min/day cognitive training</li>
            <li>• Annual NeuroScan check-in</li>
          </ul>
        </section>
      </div>
    </main>
  );
}