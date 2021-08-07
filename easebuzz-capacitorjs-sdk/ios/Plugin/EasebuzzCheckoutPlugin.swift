import Foundation
import Capacitor
import Easebuzz
/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(EasebuzzCheckoutPlugin)
public class EasebuzzCheckoutPlugin: CAPPlugin,PayWithEasebuzzCallback {
    private let implementation = EasebuzzCheckout()
    var call: CAPPluginCall?

    @objc func proceedToPayment(_ call: CAPPluginCall) {
        self.call = call
        
        guard let option = call.options else { return }
        
        DispatchQueue.main.async {
            let payment = Payment.init(customerData: option["option"] as? [String:String] ?? Dictionary())
            let paymentValid = payment.isValid().validity
            if !paymentValid {
                print("Invalid records")
                let dict =  self.setErrorResponseDictError("Empty error", errorMessage: "Invalid validation", result: "Invalid request")
                call.resolve(dict as? [String:String] ?? Dictionary())
            } else{
                PayWithEasebuzz.setUp(pebCallback: self )
                PayWithEasebuzz.invokePaymentOptionsView(paymentObj: payment, isFrom: self)
            }
        }
    }
    
    // payment call callback and handle response
    public func PEBCallback(data: [String : AnyObject]) {
        if data.count > 0 {
            if let call = call {
                call.resolve(data)
            }
        }else{
            let dict =  self.setErrorResponseDictError("Empty error", errorMessage: "Empty payment response", result: "payment_failed")
            call?.resolve(dict as? [String:String] ?? Dictionary())
        }
    }

    // Create error response dictionary when something went  wrong
    func setErrorResponseDictError(_ error: String?, errorMessage: String?, result: String?) -> [AnyHashable : Any]? {
        var dict: [AnyHashable : Any] = [:]
        var dictChild: [AnyHashable : Any] = [:]
        dictChild["error"] = "\(error ?? "")"
        dictChild["error_msg"] = "\(errorMessage ?? "")"
        dict["result"] = "\(result ?? "")"
        dict["payment_response"] = dictChild
        return dict
    }
}
