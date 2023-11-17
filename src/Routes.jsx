import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Property from './pages/Property';
import { NavBar, SocialBar } from './components';
import Filtered from './pages/Filtered';
import Nosotros from './pages/Nosotros';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <SocialBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<RedirectToHome />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/filtered/:filter" element={<Filtered />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

function RedirectToHome() {
    return <Navigate to="/" replace />;
}

export default App;
