// Libraries
import {NativeModules, Platform} from 'react-native';

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

  restartSession() {
    return RNUXCam.restartSession();
  }

  setAutomaticScreenNameTagging(enableScreenNameTagging) {
    if (Platform.OS === 'android') {
      // eslint-disable-next-line
      console.warn(
        'UXCam#setAutomaticScreenNameTagging not available on Android',
      );
    } else {
      return RNUXCam.setAutomaticScreenNameTagging(enableScreenNameTagging);
    }
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

  markSessionAsFavorite() {
    return RNUXCam.markSessionAsFavorite();
  }

  // --------------------------------------------------
  // URLs
  // --------------------------------------------------
  async urlForCurrentUser() {
    return RNUXCam.urlForCurrentUser();
  }

  async urlForCurrentSession() {
    return RNUXCam.urlForCurrentSession();
  }

}


export default new UXCam();
