import axios from "../Axios/axios";
import { useHistory } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";

function Auth() {
  const effect = () => {
    const script = document.createElement('script');

    script.src = "./app-assets/js/scripts/pages/auth-login.js";
    script.async = true;
    console.log("workinng")
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }

  }
  useEffect(() => {
    effect()
  },[])
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(`Email: ${email}, passowrd: ${password}`);

  //For error handling
  const [error, setError] = useState(false);

  //Login URL
  const loginURL = "/login";

  const loginReqParams = {
    email,
    password,
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // const cookies = new Cookies();
    // Calling Login API
    await axios
      .post(loginURL, loginReqParams, {
        credentials: true,
      })
      .then((response) => {
        console.log(response);
        // console.log(response.data.users.name)
        console.log(response.data.token);
        // localStorage.setItem("token", response);
        localStorage.setItem("token", JSON.stringify(response));
        // cookies.set( response.data.token);

        history.push("/dashboard");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        //   Error handling starts here
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };
  const errorText = (
    <div>
      <p>Authentication Falied</p>
    </div>
  );

  return (
    <>
      <div className="app-content">
        {/* <div className="content-overlay" /> */}
        {/* <div className="header-navbar-shadow" /> */}
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="auth-wrapper auth-basic px-2">
              <div className="auth-inner my-2">
                {/* Login basic */}
                <div className="card mb-0">
                  <div className="card-body">
                    <a className="brand-logo">

                      <h2 className="brand-text text-primary ms-1">Pixalive Admin</h2>
                    </a>
                    <h4 className="card-title mb-1">Welcome to Pixalive admin! 👋</h4>
                    <p className="card-text mb-2">
                      Please sign-in to your account and start the adventure
                    </p>
                    <form
                      className="auth-login-form mt-2"
                      onSubmit={formSubmitHandler}
                    >
                      <div className="mb-1">
                        <label htmlFor="login-email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="login-email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          name="login-email"
                          placeholder="john@example.com"
                          aria-describedby="login-email"
                          tabIndex={1}
                          autoFocus
                        />
                      </div>
                      <div className="mb-1">
                        <div className="d-flex justify-content-between">
                          <label
                            className="form-label"
                            htmlFor="login-password"
                          >
                            Password
                          </label>
                          <a href="auth-forgot-password-basic.html">
                            <small>Forgot Password?</small>
                          </a>
                        </div>
                        <div className="input-group input-group-merge form-password-toggle">
                          <input
                            type="password"
                            className="form-control form-control-merge"
                            id="login-password"
                            name="login-password"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            tabIndex={2}
                            placeholder="············"
                            aria-describedby="login-password"
                          />
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                            tabIndex={3}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember-me"
                          >
                            {" "}
                            Remember Me{" "}
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-primary w-100" tabIndex={4}>
                        Sign in
                      </button>
                    </form>
                    <p className="text-center mt-2">
                      <span>New on our platform?</span>
                      <a href="auth-register-basic.html">
                        <span>Create an account</span>
                      </a>
                    </p>
                    <div className="divider my-2">
                      <div className="divider-text">or</div>
                    </div>
                    <div className="auth-footer-btn d-flex justify-content-center">
                      <a href="#" className="btn btn-facebook">
                        <i data-feather="facebook" />
                      </a>
                      <a href="#" className="btn btn-twitter white">
                        <i data-feather="twitter" />
                      </a>
                      <a href="#" className="btn btn-google">
                        <i data-feather="mail" />
                      </a>
                      <a href="#" className="btn btn-github">
                        <i data-feather="github" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* /Login basic */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
