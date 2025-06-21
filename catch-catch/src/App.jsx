import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapContainer from './components/MapContainer';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🗺️ CatchCatch - 충북 탐험 AR 게임</h1>
      <MapContainer />
    </div>
  );
}

export default App
