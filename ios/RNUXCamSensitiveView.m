//
//  RNUXCamSensitiveView.m
//  RNUXCam
//
//  Created by Dmitriy Ilchenko on 11/8/18.
//  Copyright © 2018 Mark Miyashita. All rights reserved.
//

#import <UXCam/UXCam.h>
#import <React/RCTViewManager.h>

@interface RNUXCamSensitiveView : RCTViewManager
@end

@implementation RNUXCamSensitiveView

RCT_EXPORT_MODULE()

- (UIView *)view
{
    UIView* sensetiveView = [[UIView alloc] init];
    [UXCam occludeSensitiveView:(UIView*)sensetiveView];
    
    return sensetiveView;
}

@end
