// src/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouterState,
} from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import "../styles/global.css";

// Create a single QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: 2,
    },
  },
});

// Loading indicator component
const LoadingIndicator = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100/50">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export const Route = createRootRoute({
  head: () => ({
    title: "TanStack Start Starter",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "A starter application with TanStack" },
      { charSet: "utf-8" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  } as const),
  component: RootComponent,
});

function RootComponent() {
  const isLoading = useRouterState({ select: (state) => state.isLoading });

  return (
    <QueryClientProvider client={queryClient}>
      <RootDocument>
          {isLoading && <LoadingIndicator />}
          <Outlet />
      </RootDocument>
    </QueryClientProvider>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            font-family: "Satoshi", sans-serif;
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
        `}</style>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

export default RootComponent;