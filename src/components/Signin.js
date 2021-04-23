import React, { useRef, useState } from "react";
import { useAuth } from "../auth/Auth";
import { useHistory } from "react-router-dom";
import Logo from "../images/logo.png";

export default function Signin() {
  const emailRef = useRef();
  // eslint-disable-next-line
  const passwordRef = useRef();
  // eslint-disable-next-line
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { signin } = useAuth();
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="d-flex col-6 justify-content-center align-items-center">
          <div className="signin-card">
            <div className="signin-header">Sign in</div>
            <form className="signin-form" onSubmit={handleSubmit}>
              {error && <div className="alert">{error}</div>}
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-prepend-icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email Address"
                      required
                      autoFocus
                      defaultValue="sricharanprabhuram2416@gmail.com"
                      ref={emailRef}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-prepend-icon">
                      <i className="fas fa-key" />
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      autoFocus
                      required
                      defaultValue=""
                      ref={passwordRef}
                    />
                  </div>
                </div>
              </div>
              <button
                disabled={loading}
                type="submit"
                className="btn signin-btn"
              >
                Sign in
              </button>
            </form>
            <div className="signin-footer">
              Forgot Password ?
              <span className="forgot-password"> Click here</span>
            </div>
          </div>
        </div>
        <div className="d-flex col-6 justify-content-center align-items-center">
          <div className="logo-wrap">
            <img className="logo" src={Logo} alt="futFicianado-main_logo" />
            <h2 className="main-name">Fút Ficianado</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
