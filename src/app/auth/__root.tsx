import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "TanStack Start Starter" },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <div>
      <h1>Root Layout</h1>
      <Outlet />
    </div>
  );
}
