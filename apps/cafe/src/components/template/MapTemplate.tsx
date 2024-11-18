'use client';

import KakaoMapOrganism from '@/components/organisms/KakaoMapOrganism';

const MapTemplate = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">My Kakao Map</h1>
      <KakaoMapOrganism
        center={{ lat: 37.566826, lng: 126.978656 }}
        containerClassName="rounded-lg shadow-lg border border-gray-200"
      />
    </div>
  );
};

export default MapTemplate;
