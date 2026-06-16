//import "LoginPage.css";
import { redirectToSpotifyAuth } from "../utils/auth.js";

function LoginPage() {
  
  return (
    <>
      <h1>Welcome to Jammming!</h1>
      <button onClick={redirectToSpotifyAuth}>Login with Spotify</button>
    </>
  )
}

export default LoginPage;