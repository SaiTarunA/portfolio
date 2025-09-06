import { AppSidebar } from "@/layouts/Sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "../Header/app-header";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col">
        <AppHeader>{children}</AppHeader>
      </SidebarInset>
    </SidebarProvider>
  );
}
