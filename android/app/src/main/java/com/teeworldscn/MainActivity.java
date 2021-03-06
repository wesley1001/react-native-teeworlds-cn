package com.teeworldscn;

import com.facebook.react.ReactActivity;
//import cn.reactnative.modules.update.UpdatePackage;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
//import cn.reactnative.modules.update.UpdateContext;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {
    /** Hot update **/
    // @Override
    // protected String getJSBundleFile() {
    //    return UpdateContext.getBundleUrl(this);
    // }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TeeworldsCN";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage()
            //new UpdatePackage()
        );
    }
}
