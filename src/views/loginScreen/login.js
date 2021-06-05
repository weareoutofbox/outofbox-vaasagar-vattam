/** @format */

import React from "react";
import logo from "../../assets/images/logo/logo-vv.png";
import mobLogo from "../../assets/images/logo/mob-logo.png";
import HeaderFirst from "../../components/header/headerFirst";
import Header from "../../components/header/header";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { validateFields } from "../../components/validate";
import classnames from "classnames";

class Login extends React.Component {
  // state = initialState;
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    // let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };
  submit = () => {
    if (this.validate()) {
      alert("login successfuly");
    }
  };
  render() {
    return (
      <div className='loginWrap'>
        <HeaderFirst />
        <Header />
        <div className='loginBlk'>
          <div className='container'>
            <div className='loginHeaderBlk'>
              <div className='loginLogoBlk'>
                <img src={logo} alt='logo' className='loginLogo' />
                <div className='mobLogoBlk'>
                  {/* <img src={user} alt='user' /> */}
                  <div className='logoBlk'>
                    <img src={mobLogo} alt='logo' className='mob' />
                    {/* <p>Vaasagar Vattam</p> */}
                  </div>
                </div>
              </div>
              {/* <div className='loginBtnBlk'>
                <button className='login'>Sign In</button>
              </div> */}
            </div>
            <div className='loginFormBlk'>
              <div className='loginFormHeading'>
                <h1>Log into your Vasaagar Vattam Account</h1>
                <Link to='/registration'>
                  Don’t have an account yet?{" "}
                  <span className='orange'> Sign Up.</span>
                </Link>
              </div>
              <div className='loginFormContainer'>
                <div className='loginFormContainerBlk'>
                  <form>
                    <div className='loginForm'>
                      <div>
                        <input
                          type='email'
                          name='email'
                          placeholder='Enter Email'
                          className='loginInputBox mt-50 '
                          // value={this.state.email}
                          onChange={(event) => {
                            this.setState({ name: event.target.value });
                          }}
                          required
                        />
                        <br />
                        {/* <p style={{ fontSize: 12, color: "red" }}>
                          {this.state.nameError}
                        </p> */}

                        <input
                          type='password'
                          name='password'
                          placeholder='Enter Password'
                          className='loginInputBox '
                          // value={this.state.password}
                          onChange={(event) => {
                            this.setState({ password: event.target.value });
                          }}
                          required
                        />
                        {/* <p style={{ fontSize: 12, color: "red" }}>
                          {this.state.passwordError}
                        </p> */}
                      </div>

                      <div class='form-group'>
                        <label class='form-remember'>
                          <input type='checkbox' id='html' />
                          <label for='html' className='checkbox-label'></label>
                          <p className='remember-me'>Remember Me</p>
                        </label>
                        <a class='form-recovery' href='#login'>
                          Forgot Password?
                        </a>
                      </div>

                      <div
                        class='g-recaptcha'
                        data-sitekey='6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR'
                        style={{}}></div>
                      <div className='loginFormSignInButton'>
                        <button
                          className='loginFormSignIn'
                          type='submit'
                          // onClick={() => {
                          //   this.props.history.push("/registration");
                          // }}
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
