import type { Option } from "../types";

export const appTypes: (Option & { description: string })[] = [
  {
    name: "Template",
    value: "template",
    description: "Just the basics",
  },
  {
    name: "Stack",
    value: "stack",
    description: "A pre-configured stack ready for production",
  }
];

export const stacks: Option[] = [
  {
    name: "Blues",
    value: "remix-run/blues-stack",
  },
  {
    name: "Indie",
    value: "remix-run/indie-stack",
  },
  {
    name: "Grunge",
    value: "remix-run/grunge-stack",
  },
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