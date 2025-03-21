import { DeviceNavbar } from '@/components/DevicesNavbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_users/users/$users_id/_devices')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>
    <DeviceNavbar/>
    <Outlet/>
  </div>
}
