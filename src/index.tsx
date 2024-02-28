import { Hono } from 'hono'
import qwikCityPlan from '@qwik-city-plan'
import render from './entry.ssr'
import { qwikMiddleware } from './hono-qwik-city';

const app = new Hono()

app.get('*', qwikMiddleware({ render, qwikCityPlan }));

app.get('/health', (c) => {
  return c.json({ health: 'OK' });
});

export default app
