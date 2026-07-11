// Centralized base-URL handling so we don't have eight slightly-different copies of
// `BASE_URL.replace(/\/$/, '')` scattered across components.

const RAW_BASE = import.meta.env.BASE_URL || '/';

// Base path with no trailing slash. For root-hosted sites this is "".
const BASE = RAW_BASE.replace(/\/$/, '');

/**
 * Build an absolute (in-site) URL by prefixing the configured base path.
 *
 *   withBase('/syllabus')   → '/binf4070/syllabus' (sub-path host)
 *   withBase('/syllabus')   → '/syllabus'          (root host)
 *   withBase('/')           → '/binf4070/' or '/'
 */
export function withBase(path: string = '/'): string {
  if (!path) return BASE || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path === '/') return BASE ? `${BASE}/` : '/';
  return `${BASE}${path}`;
}

export const baseHref = BASE;
