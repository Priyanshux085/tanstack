import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div>
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
}
