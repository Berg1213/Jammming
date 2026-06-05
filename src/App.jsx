import { useState, useEffect } from 'react'
import './App.css'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [accessToken, setAccessToken] = useState(null)
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      handleCallback().then(token => setAccessToken(token));
    }
  }, []);
  
  return (
    <>
      {accessToken ? <MainPage/> : <LoginPage/>}
    </>
  )
}

export default App
