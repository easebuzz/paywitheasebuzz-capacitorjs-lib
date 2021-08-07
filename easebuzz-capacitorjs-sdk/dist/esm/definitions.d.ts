export interface EasebuzzCheckoutPlugin {
    proceedToPayment(option: String): Promise<any>;
}
