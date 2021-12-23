import { registerPlugin } from '@capacitor/core';
const EasebuzzCheckout = registerPlugin('EasebuzzCheckout', {
    web: () => import('./web').then(m => new m.EasebuzzCheckoutWeb()),
});
export * from './definitions';
export { EasebuzzCheckout };
//# sourceMappingURL=index.js.map