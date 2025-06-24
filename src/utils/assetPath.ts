/**
 * Utility to get the correct path for assets in both development and production environments.
 * This helps prevent issues with asset paths when deploying to production.
 */

/**
 * Get the correct path for an asset in both development and production environments.
 * @param path - The path to the asset relative to the assets directory
 * @returns The correct path to use for the asset
 */
export function getAssetPath(path: string): string {
  // If the path is already a URL or an absolute path, return it as is
  if (path.startsWith('http') || path.startsWith('/') || path.startsWith('data:')) {
    return path;
  }
  
  // In Vite, imported assets are processed by the bundler and turned into URLs
  // The imported path value will be the correct URL in both dev and prod environments
  return path;
}

/**
 * Get the base path for the application.
 * This is useful for building URLs that point to resources at the root of the app.
 * @returns The base path for the application
 */
export function getBasePath(): string {
  return import.meta.env.VITE_BASE_PATH || '/';
}

/**
 * Get the path for public assets.
 * This is useful for referencing assets in the public folder.
 * @param path - The path to the asset relative to the public directory
 * @returns The correct path to use for the public asset
 */
export function getPublicAssetPath(path: string): string {
  const basePath = getBasePath();
  // Remove any leading slash from the path to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${basePath}${cleanPath}`;
}
