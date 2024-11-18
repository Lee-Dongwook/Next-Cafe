"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadKakaoMapSDK = void 0;
const loadKakaoMapSDK = (appKey) => {
    return new Promise((resolve, reject) => {
        if (typeof window === 'undefined') {
            reject(new Error('Kakao Maps SDK can only be loaded in the browser.'));
            return;
        }
        if (window.kakao && window.kakao.maps) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
        script.onload = () => {
            kakao.maps.load(() => resolve());
        };
        script.onerror = () => reject(new Error('Failed to load Kakao Maps SDK'));
        document.head.appendChild(script);
    });
};
exports.loadKakaoMapSDK = loadKakaoMapSDK;
