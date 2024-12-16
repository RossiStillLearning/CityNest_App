// src/App.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TabelRumah from '../components/tabelrumah';

function PerumahanAdmin() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <TabelRumah />
    </div>
  );
}

export default PerumahanAdmin;
