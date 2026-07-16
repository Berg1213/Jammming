import { useState, useEffect } from 'react'
import { handleCallback } from './utils/auth.js';
import './App.css'
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [accessToken, setAccessToken] = useState(null)
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      handleCallback().then(token => {
        console.log("token received:", token);
        if (token) {
          setAccessToken(token);
        }
      });
    }
  }, []);
  
  return (
    <>
      {accessToken ? <MainPage accessToken={accessToken} /> : <LoginPage />}    
    </>
  )
}

export default App
