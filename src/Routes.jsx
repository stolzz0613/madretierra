import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Property from './pages/Property';
import { NavBar, SocialBar } from './components';

function App() {
  return (
    <BrowserRouter>
      <SocialBar />
      <NavBar />
      <Routes>
        <Route path="madretierra/" element={<Home />} />
        <Route path="madretierra/property" element={<RedirectToHome />} />
        <Route path="madretierra/property/:id" element={<Property />} />
      </Routes>
    </BrowserRouter>
  );
}

function RedirectToHome() {
    return <Navigate to="madretierra/" replace />;
}

export default App;
