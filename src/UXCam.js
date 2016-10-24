// Libraries
import {NativeModules} from 'react-native';

// Native Modules
const {RNUXCam} = NativeModules;


class UXCam {

  startWithKey(key) {
    return RNUXCam.startWithKey(key);
  }

  stopApplicationAndUploadData() {
    return RNUXCam.stopApplicationAndUploadData();
  }

  occludeSensitiveScreen(shouldOcclude) {
    return RNUXCam.occludeSensitiveScreen(shouldOcclude);
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
