import { WebPlugin } from '@capacitor/core';
export class EasebuzzCheckoutWeb extends WebPlugin {
    async proceedToPayment(option) {
        const option_param = option;
        console.log(option_param);
    }
}
//# sourceMappingURL=web.js.map