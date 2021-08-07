import { registerPlugin } from '@capacitor/core';

import type { EasebuzzCheckoutPlugin } from './definitions';

const EasebuzzCheckout = registerPlugin<EasebuzzCheckoutPlugin>(
  'EasebuzzCheckout',
  {
    web: () => import('./web').then(m => new m.EasebuzzCheckoutWeb()),
  },
);

export * from './definitions';
export { EasebuzzCheckout };
