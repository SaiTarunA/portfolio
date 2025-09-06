import * as React from "react";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

export default function AppHeader({
  //   breadcrumbs,
  children,
}: {
  //   breadcrumbs: {
  //     id: string;
  //     title: string;
  //     url?: string;
  //   }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16 bg-background/50 backdrop-blur-lg sticky top-0 z-48">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          {/* <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={breadcrumb.id}>
                  {index != breadcrumbs?.length - 1 ? (
                    <>
                      <BreadcrumbItem className="hidden md:block">
                        {breadcrumb.url ? (
                          <BreadcrumbLink href={breadcrumb.url}>
                            {breadcrumb.title}
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                    </>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-primary">
                        {breadcrumb.title}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb> */}
        </div>
      </header>
      <div className="px-[10%]" data-section-container>
        {children}
      </div>
    </>
  );
}
