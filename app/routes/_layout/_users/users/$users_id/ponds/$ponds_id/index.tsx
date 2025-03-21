import { UserListPage } from '@/components/Users'
import MotersDetailsComponent from '@/components/Users/MotersDetailsComponent'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_layout/_users/users/$users_id/ponds/$ponds_id/',
)({
  component: MotersDetailsComponent,
})
