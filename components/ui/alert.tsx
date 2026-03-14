import * as React from "react";
import { cn } from "@/lib/utils";

const AlertContext = React.createContext<{ type?: "default" | "destructive" }>({
  type: "default",
});

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive";
}

function Alert({
  className,
  variant = "default",
  ...props
}: AlertProps) {
  return (
    <AlertContext.Provider value={{ type: variant }}>
      <div
        role="alert"
        className={cn(
          "relative w-full rounded-lg border p-4",
          variant === "destructive"
            ? "border-red-500 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-100"
            : "border-primary bg-muted text-foreground dark:bg-card",
          className
        )}
        {...props}
      />
    </AlertContext.Provider>
  );
}

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn(
        "mb-1 font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
});
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
});
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };