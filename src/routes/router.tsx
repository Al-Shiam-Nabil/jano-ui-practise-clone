import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "../App";
import TopToBottom from "../Shared/TopToBottom";

const rootRoute = createRootRoute();
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => {
    return (
      <>
        <App />
        <TopToBottom />
      </>
    );
  },
});

const routeTree = rootRoute.addChildren([indexRoute]);
export const router = createRouter({ routeTree });
