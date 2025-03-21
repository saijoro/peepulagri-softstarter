import { LoginPage } from '@/components/auth/mobile-login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LoginPage/>
}
