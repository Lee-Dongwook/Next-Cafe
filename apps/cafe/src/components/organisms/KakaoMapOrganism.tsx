'use client';

import MapContainer from '@/components/atoms/MapContainer';
import KakaoMap from '@/components/molecules/KakaoMap';

type KakaoMapOrganismProps = {
  center: { lat: number; lng: number };
  level?: number;
  containerClassName?: string;
};

const KakaoMapOrganism = ({
  center,
  level,
  containerClassName,
}: KakaoMapOrganismProps) => {
  return (
    <>
      <MapContainer id="map" className={containerClassName} />
      <KakaoMap containerId="map" center={center} level={level} />
    </>
  );
};

export default KakaoMapOrganism;
