// Libraries
import {NativeModules: {RNUXCam}} from 'react-native';


class UXCam {

  startWithKey(key) {
    return RNUXCam.startWithKey(key);
  }

  stopApplicationAndUploadData() {
    return RNUXCam.stopApplicationAndUploadData();
  }

  tagScreenName(screenName) {
    return RNUXCam.tagScreenName(screenName);
  }

  tagUserName(userName) {
    // Native expects a string so we have to coerce any integers
    // to strings.
    return RNUXCam.tagUserName(userName.toString());
  }

}


export default new UXCam();
