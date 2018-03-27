//
//  RNUXCam.m
//  RNUXCam
//
//  Created by Mark Miyashita on 10/22/16.
//  Copyright © 2016 Mark Miyashita. All rights reserved.
//


#import "RNUXCam.h"
#import <UXCam/UXCam.h>


@implementation RNUXCam

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(startWithKey:(NSString *)key) {
  [UXCam startWithKey:key];
}

RCT_EXPORT_METHOD(stopRecordingScrollingOnStutterOS) {
  [UXCam StopRecordingScrollingOnStutterOS:true];
}

RCT_EXPORT_METHOD(stopApplicationAndUploadData) {
  [UXCam stopApplicationAndUploadData];
}

RCT_EXPORT_METHOD(restartSession) {
  [UXCam restartSession];
}

RCT_EXPORT_METHOD(setAutomaticScreenNameTagging:(BOOL)automaticScreenNameTagging) {
  [UXCam SetAutomaticScreenNameTagging:automaticScreenNameTagging];
}

RCT_EXPORT_METHOD(occludeSensitiveScreen:(BOOL)occlude) {
  [UXCam occludeSensitiveScreen:occlude];
}

RCT_EXPORT_METHOD(tagScreenName:(NSString *)screenName) {
  [UXCam tagScreenName:screenName];
}

RCT_EXPORT_METHOD(tagUserName:(NSString *)userName) {
  [UXCam tagUsersName:userName];
}

RCT_EXPORT_METHOD(addTag:(NSString *)tag withProperties:(NSDictionary *)properties) {
  [UXCam addTag:tag withProperties:properties];
}

RCT_EXPORT_METHOD(markSessionAsFavorite) {
  return [UXCam markSessionAsFavorite];
}

RCT_EXPORT_METHOD(urlForCurrentUser:(RCTPromiseResolveBlock)resolve
                           rejecter:(RCTPromiseRejectBlock)reject) {
  NSString *url = [UXCam urlForCurrentUser];

  if (url) {
    resolve(url);
  } else {
    NSString *code = @"no_url";
    NSString *message = @"Could not retrieve the url for the current user.";
    NSError *error = [NSError errorWithDomain:@"RNUXCam" code:0 userInfo:nil];

    reject(code, message, error);
  }
}

RCT_EXPORT_METHOD(urlForCurrentSession:(RCTPromiseResolveBlock)resolve
                              rejecter:(RCTPromiseRejectBlock)reject) {
  NSString *url = [UXCam urlForCurrentSession];

  if (url) {
    resolve(url);
  } else {
    NSString *code = @"no_url";
    NSString *message = @"Could not retrieve the url for the current session.";
    NSError *error = [NSError errorWithDomain:@"RNUXCam" code:0 userInfo:nil];

    reject(code, message, error);
  }
}

@end
