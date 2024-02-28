import { Hono } from 'hono'
import { qwikMiddleware } from './hono-qwik-city';

const app = new Hono()

if (import.meta.env.PROD) {
  const render = require('./entry.ssr');
  const qwikCityPlan = require('@qwik-city-plan');
  app.get('*', qwikMiddleware({ render, qwikCityPlan }));
}

app.get('/health', (c) => {
  return c.json({ health: 'OK' });
});

export default app
