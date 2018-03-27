// Libraries
import {NativeModules, Platform} from 'react-native';
import Package from 'react-native-package';


/**
 * Package.create handles two things:
 *
 *   1. Checks that for each platform that's `enabled`, the module is installed
 *      properly. If it's not, it logs a warning.
 *   2. Guards the module on every platform that is not `enabled`. This allows
 *      the module to exist in cross-platform code without hacks to disable it.
 *
 * You can read more about `react-native-package` here:
 * https://github.com/negativetwelve/react-native-package
 */
export default Package.create({
  json: require('../package.json'),
  nativeModule: NativeModules.RNUXCam,
  enabled: Platform.select({
    android: true,
    ios: true,
  }),
  export: (UXCam) => ({
    // Initialize
    startWithKey: (key) => UXCam.startWithKey(key),
    stopRecordingScrollingOnStutterOS: () => UXCam.stopRecordingScrollingOnStutterOS(),
    stopApplicationAndUploadData: () => UXCam.stopApplicationAndUploadData(),
    restartSession: () => UXCam.restartSession(),
    setAutomaticScreenNameTagging: (isEnabled) => UXCam.setAutomaticScreenNameTagging(isEnabled),

    // Occlude
    occludeSensitiveScreen: (shouldOcclude) => UXCam.occludeSensitiveScreen(shouldOcclude),

    // Tags
    tagScreenName: (screenName) => UXCam.tagScreenName(screenName),
    tagUserName: (userName) => UXCam.tagUserName(userName.toString()),
    addTag: (tag, properties = {}) => UXCam.addTag(tag, properties),
    markSessionAsFavorite: () => UXCam.markSessionAsFavorite(),

    // URLs
    urlForCurrentUser: () => UXCam.urlForCurrentUser(),
    urlForCurrentSession: () => UXCam.urlForCurrentSession(),
  }),
});
