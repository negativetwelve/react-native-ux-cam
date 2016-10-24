# react-native-ux-cam

React Native wrapper for [UXCam](https://uxcam.com).

## Setup

```bash
# Yarn
yarn add react-native-ux-cam

# NPM
npm install --save react-native-ux-cam
```

### iOS with react-native and Cocoapods

Run the following:

```bash
react-native link react-native-ux-cam
```

Then, add the following to your Podfile:

```ruby
pod "UXCam", "~> 2.5.7"
```

Then run:

```bash
pod install
```

You're done! :tada:

### Android

Coming soon!

## Usage

```js
// Import UXCam.
import UXCam from 'react-native-ux-cam';

// Initialize using your app key.
UXCam.startWithKey(key);

// Tag a screen.
UXCam.tagScreenName('my screen');

// Tag a user.
UXCam.tagUserName('John Doe');

// Hide a sensitive screen.
UXCam.occludeSensitiveScreen(true);

// Unhide a sensitive screen.
UXCam.occludeSensitiveScreen(false);

// Stop recording and upload data manually.
UXCam.stopApplicationAndUploadData();
```

If a method is missing from the official SDK, please send a PR!
