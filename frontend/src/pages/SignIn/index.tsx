import "./styles.css";
import { GoogleLogo } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/authContext";

function SignIn() {
  const navigate = useNavigate();
  const Auth = useAuth();

  async function handleGoogleSignIn() {
    try {
      await Auth.signInWithGoogle();
      navigate("/");
    } catch (error) {
      alert("Erro ao fazer login");
    }
  }

  return (
    <div className="market-container-login">
      <div className="market-user">
        <small>{Auth.user?.displayName}</small>
      </div>

      <h1>Acesse sua conta </h1>

      <div className="market-input">
        <input type="email" placeholder="Email" />
        <p />
        <input type="password" placeholder="Senha" />
      </div>

      <div className="btn-container">
        <button type="button" className="market-button-login">
          Entra
        </button>

        <button
          type="button"
          className="market-button-google"
          onClick={handleGoogleSignIn}
        >
          <GoogleLogo />
          Entra com Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;
