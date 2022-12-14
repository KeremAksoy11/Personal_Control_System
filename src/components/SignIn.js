import React from "react";
import '../components/SignIn.css'
import { useSelector, useDispatch } from "react-redux"
import { changeEmail, changePassword, login } from '../redux/authSlice'
import Loading from './Loading'
import { Link } from 'react-router-dom'

function SignIn() {
  const email = useSelector((state) => state.auth.email)
  const password = useSelector((state) => state.auth.password)
  const error = useSelector((state) => state.auth.error)
  const isLoading = useSelector((state) => state.auth.isLoading)


  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value))
  }

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.currentTarget.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        <h2 className="active"> Giriş Yap </h2>
        {/*  <Link to={'/sign-up'}>
        <h2 className="inactive underlineHover">Sign Up </h2>
        </Link> */}

        <div className="fadeIn first">
          <img src="https://www.svgrepo.com/show/4529/user.svg" height={75} width={75} altid="icon" alt="User Icon" />
        </div>
        <br />
        {error && (
          <h5 className="small" style={{ color: "red" }}>{error}</h5>
        )}
        <br />
        <form onSubmit={handleSubmit}>
          <p className="text-center" style={{ color: "#39ace7" }}>Email</p>
          <input type="email" id="login" className="fadeIn second" name="login"
            onChange={handleEmailChange} value={email} />
          <p className="text-center" style={{ color: "#39ace7" }}>Şifre</p>
          <input type="password" id="password" className="fadeIn third" name="login"
            onChange={handlePasswordChange} value={password} />
          <br />
          <button type="submit" disabled={isLoading} className="fadeIn fourth">{isLoading ? <Loading /> : "Giriş Yap"}</button>

        </form>


        <div id="formFooter">
          <Link to={"/forgotPassword"}>
            <a className="underlineHover" href="/#">Şifremi Unuttum</a>
          </Link>
        </div>
        <div id="formFooter">
          <Link to={"/admin-sign-in"}>
            <a className="underlineHover" href="/#">Admin Paneline Geç</a>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default SignIn;