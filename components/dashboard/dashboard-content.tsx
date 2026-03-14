"use client";

import Overview from "./Overview";

type DashboardContentProps = {
  greeting: string;
  firstName: string;
  marketiqWidgets?: boolean;
};

export function DashboardContent({ greeting, firstName, marketiqWidgets }: DashboardContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{greeting}, {firstName}!</h1>
        <p className="text-muted-foreground">Welcome back to your dashboard. Here’s a summary of your current stats and activities.</p>
      </div>
      {marketiqWidgets && <Overview />}
      {/* Add extra Marketiq widgets or dashboard sections here as needed */}
    </div>
  );
}

export default DashboardContent;