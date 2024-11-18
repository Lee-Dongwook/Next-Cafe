'use client';

import { useEffect } from 'react';
import { loadKakaoMapSDK, initializeKakaoMap } from 'kakao-custom-map';

type KakaoMapProps = {
  containerId: string;
  center: { lat: number; lng: number };
  level?: number;
};

const KakaoMap = ({ containerId, center, level = 3 }: KakaoMapProps) => {
  useEffect(() => {
    const loadMap = async () => {
      try {
        await loadKakaoMapSDK(process.env.NEXT_PUBLIC_KAKAO_APP_KEY as string);
        initializeKakaoMap(containerId, { center, level });
      } catch (error) {
        console.error('Failed to load Kakao Map SDK', error);
      }
    };
    loadMap();
  }, [containerId, center, level]);

  return null;
};

export default KakaoMap;
