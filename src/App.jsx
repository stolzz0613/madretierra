import { useEffect } from 'react';
import './App.css'

import { GlobalStateProvider } from './context/GlobalContext'
import Routes from './Routes'

function App() {
  useEffect(() => {
    window.gtag('js', new Date());
    window.gtag('config', 'G-DQ81706NG7');
  }, []);
  return (
    <GlobalStateProvider>
      <Routes />
    </GlobalStateProvider>
  )
}

export default App
