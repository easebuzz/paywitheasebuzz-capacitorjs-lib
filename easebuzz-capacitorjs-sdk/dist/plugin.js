var capacitorEasebuzzCheckout = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
