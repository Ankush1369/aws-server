import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

const PORT = Number(process.env.PORT || 3000);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

serve(
  {
    fetch: app.fetch,
    port: PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
