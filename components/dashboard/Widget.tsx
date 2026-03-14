"use client";

import { Card } from "@/components/ui/card";

type WidgetProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: string;
  helperText?: string;
};

export function Widget({
  title,
  value,
  icon,
  change,
  helperText,
}: WidgetProps) {
  return (
    <Card className="flex flex-col gap-2 p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm font-medium">{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      {change && (
        <p className={`text-xs font-semibold ${change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
          {change}
        </p>
      )}
      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
    </Card>
  );
}

export default Widget;