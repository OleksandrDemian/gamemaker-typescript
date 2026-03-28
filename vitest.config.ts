import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Allows you to use 'describe', 'it', 'expect' without importing them in every file
    globals: true,
    // Use 'node' for backend apps, or 'jsdom' for frontend/UI apps
    environment: 'node',
    // Include all files ending in .test.ts or .spec.ts
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
});
