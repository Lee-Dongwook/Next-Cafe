"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeKakaoMap = void 0;
const initializeKakaoMap = (containerId, options) => {
    var _a;
    if (!window.kakao) {
        throw new Error('Kakao Maps SDK is not loaded');
    }
    const mapContainer = document.getElementById(containerId);
    if (!mapContainer) {
        throw new Error(`Container with id "${containerId}" not found`);
    }
    const mapOptions = {
        center: new kakao.maps.LatLng(options.center.lat, options.center.lng),
        level: (_a = options.level) !== null && _a !== void 0 ? _a : 3,
    };
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(options.center.lat, options.center.lng),
    });
    marker.setMap(map);
    return { map, marker };
};
exports.initializeKakaoMap = initializeKakaoMap;
