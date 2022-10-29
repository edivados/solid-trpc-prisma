import { httpBatchLink, loggerLink, createTRPCProxyClient } from "@trpc/client";
import SuperJSON from "superjson";
import type { Router } from "./server/router";

export const client = createTRPCProxyClient<Router>({
  transformer: SuperJSON,
  links: [loggerLink({ enabled: () => true }), httpBatchLink({ url: "/api/trpc" })],
});
