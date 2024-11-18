import { KakaoMapOptions } from './types';

export const initializeKakaoMap = (
  containerId: string,
  options: KakaoMapOptions,
) => {
  if (!window.kakao) {
    throw new Error('Kakao Maps SDK is not loaded');
  }

  const mapContainer = document.getElementById(containerId);
  if (!mapContainer) {
    throw new Error(`Container with id "${containerId}" not found`);
  }

  const mapOptions = {
    center: new kakao.maps.LatLng(options.center.lat, options.center.lng),
    level: options.level ?? 3,
  };

  const map = new kakao.maps.Map(mapContainer, mapOptions);

  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(options.center.lat, options.center.lng),
  });

  marker.setMap(map);

  return { map, marker };
};
