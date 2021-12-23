import { WebPlugin } from '@capacitor/core';

import type { EasebuzzCheckoutPlugin } from './definitions';

export class EasebuzzCheckoutWeb extends WebPlugin implements EasebuzzCheckoutPlugin {

  async proceedToPayment(option: String): Promise<any>{
    const option_param=option;
    console.log(option_param);
  }
}
