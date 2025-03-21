import MotorDetails from '@/components/DeviceSettings/MotorDetails'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_layout/_devices/devices/$device_id/motors/$motor_id/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div><MotorDetails/></div>
  )
}
