'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const EasebuzzCheckout = core.registerPlugin('EasebuzzCheckout', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.EasebuzzCheckoutWeb()),
});

class EasebuzzCheckoutWeb extends core.WebPlugin {
    async proceedToPayment(option) {
        const option_param = option;
        console.log(option_param);
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EasebuzzCheckoutWeb: EasebuzzCheckoutWeb
});

exports.EasebuzzCheckout = EasebuzzCheckout;
//# sourceMappingURL=plugin.cjs.js.map
