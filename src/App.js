import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import User from './pages/User';
import About from './pages/About'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="user" element={<User />} />
        <Route path="about" element={<About />} />
      </Routes>
  );
}

export default App;
