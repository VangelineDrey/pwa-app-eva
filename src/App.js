import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Bayar from './pages/Bayar';
import About from './pages/About'
import { Route, Routes } from 'react-router-dom';
import Npwp from './pages/Npwp.js';
import Bantuan from './pages/Bantuan.js'
import Loyalty from './pages/Loyalty.js'
import Informasi from './pages/Informasi.js'
import Analisis from './pages/Analisis.js'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="bayar" element={<Bayar />} />
        <Route path="about" element={<About />} />
        <Route path="npwp" element={<Npwp />} />
        <Route path="bantuan" element={<Bantuan />} />
        <Route path="loyalty" element={<Loyalty />} />
        <Route path="informasi" element={<Informasi />} />
        <Route path="analisis" element={<Analisis />} />
      </Routes>
  );
}

export default App;
