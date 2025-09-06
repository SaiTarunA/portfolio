import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-22 w-full rounded-lg border bg-transparent px-5 py-2.5 text-base shadow-[-2px_-2px_4px_rgba(255,255,255,1),_2px_2px_4px_rgba(0,0,0,0.1)] dark:shadow-[-2px_-2px_4px_rgba(0,0,0,1),_2px_2px_4px_rgba(255,255,255,0.1)] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
