import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import "../css/loginform.css";
import Google from "../assets/google.svg?react";

const Loginform = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userEmail = await signInWithEmailAndPassword(auth, usuario, senha);
      console.log("Logado com sucesso:", userEmail.user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  async function handleGoogleLogin() {
    try {
      const loginGoogle = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", loginGoogle.user);
      navigate("/");
    } catch (error) {
      console.error("Erro no Google:", error);
    }
  }
  return (
    <section className="login-container">
      <div className="form-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <h1>Bem-vindo de volta</h1>
            <p>Faça login para continuar sua jornada</p>
          </div>
          <div className="input-group">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={({ target }) => setUsuario(target.value)}
              placeholder="Digite seu usuário"
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={({ target }) => setSenha(target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          <div className="actions">
            <Link to="perdeu" className="forgot-pass">
              Perdeu a senha?
            </Link>
            <button className="entrar">ENTRAR</button>
          </div>

          <div className="divider">
            <span>ou entre com</span>
          </div>

          <button
            onClick={handleGoogleLogin}
            type="button"
            className="google-btn"
          >
            <Google className="google-img" />
            <span>Continuar com Google</span>
          </button>

          <div className="cadastre-se">
            <p>
              Não tem uma conta? <Link to="criar">Cadastre-se</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Loginform;
