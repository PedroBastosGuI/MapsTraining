import {Platform, PixelRatio} from 'react-native';

export function getPixelSize(pixels) {
    return Platform.select({
        iospixel: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    })
}