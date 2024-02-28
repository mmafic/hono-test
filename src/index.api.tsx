import { Hono } from 'hono'
import { api } from './api';
import { qwikMiddleware } from './hono-qwik-city';
import render from './entry.ssr';
import qwikCityPlan from '@qwik-city-plan';

const app = new Hono()
app.get('*', qwikMiddleware({ render, qwikCityPlan }));
api(app);

export default app
