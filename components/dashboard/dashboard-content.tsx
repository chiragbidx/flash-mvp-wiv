"use client";
import {
  Briefcase,
  PieChart,
  Users,
  Folder,
  Bot,
  BarChart4,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function DashboardContent({
  greeting,
  firstName,
  marketiqWidgets = false,
}: {
  greeting: string;
  firstName: string;
  marketiqWidgets?: boolean;
}) {
  // Multi-featured agency dashboard
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {greeting}, {firstName}! 👋
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome to your Marketiq agent portal &mdash; manage clients, campaigns, content, and AI-powered workflows.
        </p>
      </div>
      {marketiqWidgets ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          <DashboardWidget
            href="/dashboard/clients"
            color="bg-primary/10 text-primary"
            icon={<Briefcase className="size-6" />}
            label="Clients"
            desc="See all managed clients, contacts & brands"
            cta="View Clients"
          />
          <DashboardWidget
            href="/dashboard/campaigns"
            color="bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-400"
            icon={<PieChart className="size-6" />}
            label="Campaigns"
            desc="Plan and track active marketing campaigns"
            cta="Go to Campaigns"
          />
          <DashboardWidget
            href="/dashboard/assets"
            color="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-400"
            icon={<Folder className="size-6" />}
            label="Assets"
            desc="Access campaign assets & content library"
            cta="Browse Assets"
          />
          <DashboardWidget
            href="/dashboard/agents"
            color="bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-400"
            icon={<Bot className="size-6" />}
            label="AI Agents"
            desc="Try AI-powered campaign ideation and copy"
            cta="Launch AI Agent"
          />
          <DashboardWidget
            href="/dashboard/analytics"
            color="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-400"
            icon={<BarChart4 className="size-6" />}
            label="Analytics"
            desc="See reporting & insights for your work"
            cta="Analytics"
          />
          <DashboardWidget
            href="/dashboard/team"
            color="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
            icon={<Users className="size-6" />}
            label="Team"
            desc="Collaborate & manage staff access"
            cta="Team Members"
          />
        </div>
      ) : null}
      {/* Recent activity, quick actions panels, messaging can be added below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
          <ul className="space-y-3">
            <QuickAction label="Add New Client" href="/dashboard/clients" />
            <QuickAction label="Plan Campaign" href="/dashboard/campaigns" />
            <QuickAction label="Try AI Agent" href="/dashboard/agents" />
            <QuickAction label="Upload Asset" href="/dashboard/assets" />
          </ul>
        </div>
        <div className="bg-muted/50 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
          <p className="text-sm text-muted-foreground">
            (Coming soon: campaign plans, approvals, asset uploads, AI agent insights, and more will show here.)
          </p>
        </div>
      </div>
    </section>
  );
}

function DashboardWidget({
  href,
  icon,
  label,
  desc,
  cta,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
  cta: string;
  color: string;
}) {
  return (
    <Link href={href} className={`flex items-start gap-4 rounded-xl p-5 transition hover:shadow-lg shadow-sm ${color}`}>
      <span className="flex items-center justify-center bg-white dark:bg-zinc-900 rounded-lg size-11 ring-4 ring-background">
        {icon}
      </span>
      <div className="flex-1 flex flex-col gap-0.5">
        <span className="text-base font-semibold">{label}</span>
        <span className="text-xs text-muted-foreground mb-2">{desc}</span>
        <span className="inline-flex items-center text-xs font-medium text-primary underline hover:no-underline">{cta} <ArrowRight className="ml-1 size-3" /></span>
      </div>
    </Link>
  );
}

function QuickAction({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link href={href} className="inline-flex items-center gap-2 text-sm text-primary underline hover:no-underline">
        {label} <ArrowRight className="size-3" />
      </Link>
    </li>
  );
}