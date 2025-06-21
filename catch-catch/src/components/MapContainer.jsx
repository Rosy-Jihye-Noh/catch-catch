const KAKAO_KEY = import.meta.env.VITE_KAKAO_MAP_API_KEY;

import { useEffect } from 'react';

const MapContainer = () => {
  useEffect(() => {
    console.log("useEffect 실행됨 - 스크립트 생성 직전");
      const script = document.createElement('script');
      script.onload = () => {
        console.log("카카오 스크립트 로드 완료");
        console.log("window.kakao 객체:", window.kakao);
            window.kakao.maps.load(() => {
              const container = document.getElementById('map');
              const options = {
                center: new window.kakao.maps.LatLng(36.6357, 127.4917), // 충북 도청 근처
                level: 7,
              };
              const map = new window.kakao.maps.Map(container, options);
            });
        };

      script.onerror = () => {
        console.error("카카오 스크립트 로드 실패");
      };
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_KEY}&autoload=false`;
    console.log("script.src:", script.src);
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '8px' }}>📍 충북 지역 지도</h2>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default MapContainer;


