import { WebPlugin } from '@capacitor/core';
import type { EasebuzzCheckoutPlugin } from './definitions';
export declare class EasebuzzCheckoutWeb extends WebPlugin implements EasebuzzCheckoutPlugin {
    proceedToPayment(option: any): Promise<any>;
}
