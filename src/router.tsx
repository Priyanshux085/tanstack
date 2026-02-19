import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  const router = createRouter({
    defaultNotFoundComponent: () => <div>Not Found</div>,
    routeTree,
    scrollRestoration: true,
  });

  return router;
}
