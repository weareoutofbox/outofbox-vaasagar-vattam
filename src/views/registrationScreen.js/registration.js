/** @format */

import React from "react";
import logo from "../../assets/images/logo/logo.png";
import HeaderFirst from "../../components/header/headerFirst";
import { Link } from "react-router-dom";

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    };
  }
  yep = async () => {
    var loader = document.getElementById("checkBox");
    loader.className = "yepAnim";
    setTimeout(function () {
      loader.className = "loadAnim";
    });
    setTimeout(function () {
      loader.className = "checkAnim";
    });
    // setTimeout(function () {
    //   document.body.innerHTML = "Thank You. You will be redirected shortly.";
    //   document.body.className = "container";
    //   document.body.style.fontSize = "30px";
    // }, 3000);
  };
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
      alert("account created successfuly");
    }
  };
  render() {
    return (
      <div className='loginWrap'>
        <HeaderFirst />
        <div className='loginBlk'>
          <div className='container'>
            <div className='loginHeaderBlk'>
              <div className='loginLogoBlk'>
                <img src={logo} alt='logo' />
                <p>Vaasagar Vattam</p>
              </div>
              {/* <div className='loginBtnBlk'>
                <button className='login'>Sign In</button>
              </div> */}
            </div>
            <div className='loginFormBlk'>
              <div className='loginFormHeading'>
                <h1>Lorem Ipsum is simply dummy text</h1>
                <Link to='/login'>
                  Already a member? <span> Sign In.</span>
                </Link>
              </div>
              <div className='loginFormContainer'>
                <div className='loginFormContainerBlk regFormBlk'>
                  <form>
                    <div className='loginForm'>
                      <div>
                        <input
                          type='text'
                          placeholder='First Name'
                          className='loginInputBox'
                          required
                        />
                        <input
                          type='text'
                          placeholder='Last Name'
                          className='loginInputBox'
                          required
                        />
                        <input
                          type='email'
                          placeholder='Email Address'
                          className='loginInputBox'
                          required
                        />
                        <input
                          type='password'
                          placeholder='Password'
                          className='loginInputBox'
                          required
                        />
                        <div class='regInputGroup'>
                          <span>+91</span>
                          <input
                            type='tel'
                            placeholder='Mobile Number'
                            className='loginInputBox'
                            required
                          />
                        </div>
                      </div>
                      {/* <input
                        type='text'
                        placeholder='Enter Password'
                        className='loginInputBox'
                        required
                      /> */}
                      <div class='form-group'>
                        <label class='form-remember'>
                          <input type='checkbox' id='html' />
                          <label for='html' className='checkbox-label'></label>
                          <p className='remember-me'>
                            I agree to Vaasagar Vattam <span> T&amp;C</span> and{" "}
                            <span> Privacy Policy</span>
                          </p>
                        </label>
                        {/* <a class='form-recovery' href='#login'>
                          Forgot Password?
                        </a> */}
                      </div>
                      <div className='r-recaptcha'>
                        <div
                          class='g-recaptcha'
                          data-sitekey='6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR'
                          style={{}}></div>
                      </div>
                      <div className='reg loginFormSignInButton'>
                        <button className='loginFormSignIn' type='submit'>
                          Sign Up
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

export default Registration;
