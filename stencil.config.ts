import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stenciljs-first-contact',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
