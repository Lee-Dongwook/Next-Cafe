'use client';

type MapContainerProps = {
  id: string;
  className?: string;
};

const MapContainer = ({ id, className }: MapContainerProps) => {
  return <div id={id} className={`w-full h-[400px] ${className}`}></div>;
};

export default MapContainer;
