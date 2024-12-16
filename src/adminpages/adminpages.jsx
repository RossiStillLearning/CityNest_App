import React from 'react';
import Sidebar from '../components/sidebar';
import CardJumlahRumah from '../components/jumlahrumah';
import CardJumlahWarisan from '../components/jumlahwarisan';

function Adminpage() {
  return (
    <div className="App d-flex" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <section
        style={{
          width: '100%',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Dashboard Admin</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <CardJumlahRumah />
          <CardJumlahWarisan />
        </div>
      </section>
    </div>
  );
}

export default Adminpage;
