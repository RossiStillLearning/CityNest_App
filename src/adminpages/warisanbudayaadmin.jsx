// src/App.js
import React from 'react';
import Sidebar from '../components/sidebar';
import TabelWarisan from '../components/tabelwarisan';

function Warisanbudayaadmin() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <TabelWarisan />
    </div>
  );
}

export default Warisanbudayaadmin;
