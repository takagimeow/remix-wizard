import type { Option } from "../types";

export const appTypes: Option[] = [
  {
    name: "Template",
    value: "template",
  },
  {
    name: "Stack",
    value: "stack",
  }
];
export const templates: Option[] = [
  {
    name: 'Architect (AWS Lambda)',
    value: 'arc'
  },
  {
    name: 'Cloudflare Pages',
    value: 'cloudflare-pages'
  },
  {
    name: 'Cloudflare Workers',
    value: 'cloudflare-workers'
  },
  {
    name: 'Deno',
    value: 'deno'
  },
  {
    name: 'Express Server',
    value: 'express'
  },
  {
    name: 'Fly.io',
    value: 'fly'
  },
  {
    name: 'Netlify',
    value: 'netlify'
  },
  {
    name: 'Remix App Server',
    value: 'remix'
  },
  {
    name: 'Vercel',
    value: 'vercel'
  }
]

export const languages: Option[] = [
  {
    name: 'JavaScript',
    value: 'javascript'
  },
  {
    name: 'TypeScript',
    value: 'typescript'
  }
]