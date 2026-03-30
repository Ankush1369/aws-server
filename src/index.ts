import { serve } from '@hono/node-server';
import { Hono } from 'hono';

const app = new Hono();

const PORT = Number(process.env.PORT || 3000);

app.get('/', (c) => {
  return c.text('Hello Hono!');
});

app.post('/api/sum', async (c) => {
  const { firstNumber = 0, secondNumber = 0 } =
    ((await c.req.json()) as { firstNumber?: number; secondNumber?: number }) ?? {};
  const sum = firstNumber + secondNumber;
  return c.json({ sum });
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
