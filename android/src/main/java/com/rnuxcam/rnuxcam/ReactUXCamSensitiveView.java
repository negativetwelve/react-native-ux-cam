package com.rnuxcam.rnuxcam;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.views.view.ReactViewGroup;
import com.uxcam.UXCam;

public class ReactUXCamSensitiveView extends ViewGroupManager<ReactViewGroup> {

    public static final String REACT_CLASS = "RNUXCamSensitiveView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public ReactViewGroup createViewInstance(ThemedReactContext context) {
        ReactViewGroup sensitiveView = new ReactViewGroup(context);
        UXCam.occludeSensitiveView(sensitiveView);
        return  sensitiveView;
    }
}