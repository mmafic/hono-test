import type { Hono } from 'hono'

export const api = (app: Hono) => {
  app.get('/health', (c) => {
    return c.json({ health: 'OK' });
  });
}