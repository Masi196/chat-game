import { env } from 'cloudflare:workers';
export function gameDb() { if (!env.DB) throw new Error('Game unavailable. Please try again.'); return env.DB; }
