import { KakaoMapOptions } from './types';
export declare const initializeKakaoMap: (containerId: string, options: KakaoMapOptions) => {
    map: kakao.maps.Map;
    marker: kakao.maps.Marker;
};
