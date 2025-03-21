import { DeviceTable } from "@/components/DeviceTable";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_devices")({
  beforeLoad: async ()=>{
    const token = localStorage.getItem('authToken')
    if(!token){
      throw redirect({
        to:'/'
      })
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-[90.5vh] overflow-hidden">
      <DeviceTable />
    </div>
  );
}
