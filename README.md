# mjrharris.com

A small, dependency-free website for publishing interactive demos.

## Run locally

From this directory, serve the files with any static file server. For example:

```powershell
npx serve .
```

Opening `index.html` directly also works for a quick content check, although a
local server more closely matches production.

## Add a demo

1. Put the demo in `demos/<demo-name>/` (or link to its deployed URL).
2. Add an entry to the `demos` array at the top of `scripts/site.js`.
3. Add the demo URL to `sitemap.xml` when it should be indexed by search engines.

Each demo entry has four fields:

```js
{
  title: "Project name",
  description: "A short, plain-English explanation of what it does.",
  href: "/demos/project-name/",
  status: "Live"
}
```

## Deploy

The site has no build step. GitHub Pages publishes the repository root from the
`main` branch at `https://mjrharris.com/`.

The production bundles under `demos/` are snapshots copied from their source
projects. Their source code and development history remain in those projects.
