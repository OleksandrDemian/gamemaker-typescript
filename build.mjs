import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',         // Or 'cjs' depending on your preference
  target: 'node18',      // Target your specific node version
  outfile: "./bin/lib.js",
  packages: 'external',  // Automatically excludes all dependencies in package.json
  banner: {
    js: '#!/usr/bin/env node', // Makes the file executable as a CLI
  },
});
