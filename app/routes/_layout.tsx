import { AppSideBar } from "@/components/app-navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AppSideBar />
    </div>
  );
}
