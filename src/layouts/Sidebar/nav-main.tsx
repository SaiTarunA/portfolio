import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function NavMain({
  items,
}: {
  items: {
    id: string;
    title: string;
    icon?: LucideIcon;
  }[];
}) {
  const [active, setActive] = useState<string>(items[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <React.Fragment key={item.title}>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                tooltip={{ children: item.title }}
                size="lg"
              >
                <a href={`#${item.id}`}>
                  {item.icon && <item.icon />}
                  <span
                    className={cn(
                      "text-xl md:text-2xl font-semibold",
                      active === item.id && "text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </span>
                </a>
              </SidebarMenuButton>
              <Separator />
            </SidebarMenuItem>
          </React.Fragment>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
