package com.rnuxcam.rnuxcam;

import com.uxcam.UXCam;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.Promise;

import java.util.HashMap;

public class UXCamModule extends ReactContextBaseJavaModule {

  public UXCamModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "RNUXCam";
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void startWithKey(String key) {
    UXCam.startApplicationWithKeyForCordova(getCurrentActivity(), key);
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void tagScreenName(String screenName) {
    UXCam.tagScreenName(screenName);
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void tagUserName(String userName) {
    UXCam.tagUsersName(userName);
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void addTag(String tag, ReadableMap properties) {
    HashMap<String, String> map = new HashMap<String, String>();

    ReadableMapKeySetIterator iterator = properties.keySetIterator();
    while (iterator.hasNextKey()) {
      String key = iterator.nextKey();
      String value = properties.getString(key);
      map.put(key, value);
    }
    UXCam.addTagWithProperties(tag, map);
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void markSessionAsFavorite() {
    UXCam.markSessionAsFavorite();
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void urlForCurrentUser(Promise promise) {
    String url = UXCam.urlForCurrentUser();
    if (url == null || url.isEmpty()) {
      String code = "no_url";
      String message = "Could not retrieve the url for the current user.";
      Throwable error = new Throwable(message);
      promise.reject(code, message, error);
    } else {
      promise.resolve(url);
    }
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void urlForCurrentSession(Promise promise) {
    String url = UXCam.urlForCurrentSession();
    if (url == null || url.isEmpty()) {
      String code = "no_url";
      String message = "Could not retrieve the url for the current session.";
      Throwable error = new Throwable(message);
      promise.reject(code, message, error);
    } else {
      promise.resolve(url);
    }
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void occludeSensitiveScreen(boolean occlude) {
    UXCam.occludeSensitiveScreen(occlude);
  }

  @SuppressWarnings("unused")
  @ReactMethod
  public void stopApplicationAndUploadData() {
    UXCam.stopApplicationAndUploadData();
  }
}
