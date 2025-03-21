// src/layouts/Layout.jsx (or wherever _layout is defined)
import { UserListPage } from '@/components/Users';
import { createFileRoute } from '@tanstack/react-router';

// Then in your route file:
export const Route = createFileRoute('/_layout/_users')({
  component: UserListPage,
});
