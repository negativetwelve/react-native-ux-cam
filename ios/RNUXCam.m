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

RCT_EXPORT_METHOD(stopApplicationAndUploadData) {
  [UXCam stopApplicationAndUploadData];
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

RCT_EXPORT_METHOD(urlForCurrentUser) {
  return [UXCam urlForCurrentUser];
}

RCT_EXPORT_METHOD(urlForCurrentSession) {
  return [UXCam urlForCurrentSession];
}

@end
