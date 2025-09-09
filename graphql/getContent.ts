// lib/strapi.ts
'use server';

const STRAPI_URL = process.env.STRAPI_URL!;
const TOKEN = process.env.STRAPI_API_TOKEN;

type FetchOptions = {
  next?: { revalidate?: number };
  cache?: RequestCache;
  headers?: HeadersInit;
};
//TODO: Make this function decent
export async function gql<T>(
  query: string,
  variables?: Record<string, unknown>,
  opts: FetchOptions = {}
) {
  const url = `${STRAPI_URL}/graphql`;

  const response = await fetch(url, {
    method: 'POST', // <-- required for GraphQL
    headers: {
      'Content-Type': 'application/json',
      ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
      ...(opts.headers || {}),
    },
    body: JSON.stringify({ query, variables }), // <-- send the query
    next: opts.next,
    cache: opts.cache,
  });

  // parse JSON no matter what, so we can surface GraphQL errors too
  const json = await response.json().catch(() => ({}));

  if (!response.ok || json.errors) {
    const body = JSON.stringify(json);
    throw new Error(`Strapi error ${response.status} on ${query}: ${body}`);
  }

  return json as T;
}
