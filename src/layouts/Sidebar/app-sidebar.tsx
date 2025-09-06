import * as React from "react";
import {
  BookOpen,
  CalendarPlus,
  Frame,
  House,
  Map,
  PieChart,
  Settings,
} from "lucide-react";

import { NavMain } from "@/layouts/Sidebar/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import config from "@/lib/config";
// import Logo from "./logo";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: House,
      items: [],
    },
    {
      title: "Add a Special Day",
      url: "/add",
      icon: CalendarPlus,
      items: [],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings,
      items: [],
    },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, open, openMobile } = useSidebar();
  const isOpen = React.useMemo(
    () => (isMobile ? openMobile : open),
    [isMobile, open, openMobile]
  );

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-2">
        {isOpen && (
          <a href="/">
            <p className="px-4 pt-4 text-xl md:text-2xl font-black text-accent-foreground">
              {config.pages.index.logo}
            </p>
          </a>
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={config.pages.index.sidebar.nav} />
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
