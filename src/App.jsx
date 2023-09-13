import React from 'react';
import Navbar from "./pages/Navbar"
import Banner from "./pages/Banner"
import Animated from './pages/Corousle'; 
import Second from "./pages/Corousle2";
import Feat from "./pages/Feat";
import Formulir from "./pages/Form"

const App = () => {
  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar />
      <Banner />
      <div style={{ textAlign: 'center', marginBottom: '60px'  }}>
        <h1>Trusted by Global Leaders</h1>
        <p style={{ color: '#949293'}}>Dolor easy report and transaction growth</p> {/* Mengatur warna teks */}
      </div>
      <Animated />
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <Second/>
      </div>
      <Feat/>
      <Formulir/>
    </div>
  );
};

export default App;
