export interface EasebuzzCheckoutPlugin {
  proceedToPayment(option: any): Promise<any>;
}
