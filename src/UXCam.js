// Libraries
import {NativeModules} from 'react-native';

// Native Modules
const {RNUXCam} = NativeModules;


class UXCam {

  // --------------------------------------------------
  // Initialize
  // --------------------------------------------------
  startWithKey(key) {
    return RNUXCam.startWithKey(key);
  }

  stopApplicationAndUploadData() {
    return RNUXCam.stopApplicationAndUploadData();
  }

  // --------------------------------------------------
  // Occlude
  // --------------------------------------------------
  occludeSensitiveScreen(shouldOcclude) {
    return RNUXCam.occludeSensitiveScreen(shouldOcclude);
  }

  // --------------------------------------------------
  // Tags
  // --------------------------------------------------
  tagScreenName(screenName) {
    return RNUXCam.tagScreenName(screenName);
  }

  tagUserName(userName) {
    // Native expects a string so we have to coerce any integers
    // to strings.
    return RNUXCam.tagUserName(userName.toString());
  }

  addTag(tag, properties = {}) {
    return RNUXCam.addTag(tag, properties);
  }

  markUserAsFavorite() {
    return RNUXCam.markUserAsFavorite();
  }

  // --------------------------------------------------
  // URLs
  // --------------------------------------------------
  urlForCurrentUser() {
    return RNUXCam.urlForCurrentUser();
  }

  urlForCurrentSession() {
    return RNUXCam.urlForCurrentSession();
  }

}


export default new UXCam();
