/**
 * Builds a URL for a file in Vite's public directory.
 * Vite supplies `/` during local development and the repository path on GitHub Pages.
 */
export const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
