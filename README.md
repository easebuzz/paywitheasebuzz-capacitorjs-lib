# easebuzz-capacitorjs-sdk for PayWithEasebuzz Mobile SDK.

## Supported platforms

#### Dependencies
Android
<br />iOS

#### Android Setup and Configuration
<br />Copy peb-lib-android-x.aar file into android/app/libs/ folder of your capacitor JS application.
<br /> (If libs folder is not there, Please create it manually).


#### Note :For iOS
    Note: The existing plugin does not work on a simulator. The iOS framework is shipped with simulator architectures , so you have to replace simulator Easebuzz.framework (from iOS Frameworks folder) with device Easebuzz.framework. Please find the below folder path for replacing the framework.
replace path: easebuzz-capacitorjs-sdk -> ios -> Pods -> Easebuzz -> Easebuzz.framework

#### Initiate Payment :
    Generate access key using the Initiate Payment API at your backend. 
    (It is mandatory to integrate the Initiate Payment API at Backend only)
    Initiate Payment API Doc : https://docs.easebuzz.in/api/initiate-payment
    Pass extra parameter 'isMobile' = 1 to the Initiate Payment API, If  you are
    generating an access key for Mobile App Integrations.


#### Integration code :
```
1.Import following Packages
import { EasebuzzCheckoutPlugin, EasebuzzCheckout } from 'easebuzz-capacitorjs-sdk';
```
``` 
2.Call Payment Method
async load_paymentgateway() {
const option = {
 access_key: ' Access key generated by the Initiate Payment API',
 pay_mode : ' production / test '  }
let data = await EasebuzzCheckout.proceedToPayment({ option });
console.log(data['result']);
console.log(data['payment_response']);
}
```

#### Android Code :

<br />1.Modify MainActivity.java located in the android directory as below.
<br /><br />2.Import the Package in MainActivity.java as below.
``` 
import com.easebuzz.capacitorjs.EasebuzzCheckoutPlugin;
``` 
<br />3.Write below code in MainActivity.java
``` 
@Override
public void onCreate(Bundle savedInstanceState) {
super.onCreate(savedInstanceState);
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
add(EasebuzzCheckoutPlugin.class);
}});
}
``` 




