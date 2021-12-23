package com.easebuzz.capacitorjs;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import androidx.activity.result.ActivityResult;

import com.easebuzz.payment.kit.PWECouponsActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.ActivityCallback;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Iterator;

@CapacitorPlugin(name = "EasebuzzCheckout")
public class EasebuzzCheckoutPlugin extends Plugin {

    @PluginMethod
    public void proceedToPayment(PluginCall call) {
        saveCall(call);
        JSObject option_params = call.getObject("option", new JSObject());
        try{
            Intent intentProceed = new Intent(getActivity(), PWECouponsActivity.class);
            Iterator<?> keys = option_params.keys();
            while(keys.hasNext() ) {
                String value = "";
                String key = (String) keys.next();
                value = option_params.optString(key);
                intentProceed.putExtra(key,value);
            }
            startActivityForResult(call, intentProceed, "getOnActivityResult");
        } catch (Exception e){
            Toast.makeText(getActivity(), e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }

    @ActivityCallback
    private void getOnActivityResult(PluginCall call, ActivityResult result) {
        if (result!=null){
            Intent data = result.getData();

            JSObject jsObject = new JSObject();
            jsObject.put("result", data.getStringExtra("result"));
            jsObject.put("payment_response", data.getStringExtra("payment_response"));
            call.success(jsObject);


        }
    }
}
