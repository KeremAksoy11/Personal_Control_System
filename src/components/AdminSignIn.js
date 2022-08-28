import React from "react";
import '../components/AdminSignIn.css'
import { useSelector, useDispatch } from "react-redux"
import { changeEmail, changePassword, adminLogin } from '../redux/authSlice'
import Loading from './Loading'
import { Link } from 'react-router-dom'

function AdminSignIn() {
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
        dispatch(adminLogin({ email, password }))
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <h2 className="active"> Admin Paneline Giriş Yap </h2>


                <div className="fadeIn first">
                    <img src="https://img.icons8.com/color/344/admin-settings-male.png" height={75} width={75} altid="icon" alt="User Icon" />
                </div>
                <br></br>
                {error && (
                    <h5 className="small" style={{ color: "red" }}>{error}</h5>
                )}
                <br />
                <form onSubmit={handleSubmit}>
                    <p className="text-center" style={{ color: "#39ace7" }}>Email</p>
                    <input type="email" id="login" className="fadeIn second" name="login"
                        onChange={handleEmailChange} value={"admin@pcs.com"} disabled />
                    <p className="text-center" style={{ color: "#39ace7" }}>Şifre</p>
                    <input type="password" id="password" className="fadeIn third" name="login"
                        onChange={handlePasswordChange} value={password} />

                    <button type="submit" disabled={isLoading} className="fadeIn fourth">{isLoading ? <Loading /> : "Admin Paneline Giriş Yap"}</button>

                </form>


                <div id="formFooter">
                    <Link to={"/forgotPassword"}>
                        <a className="underlineHover" href="/#">Admin Şifremi Unuttum</a>
                    </Link>
                </div>
                <div id="formFooter">
                    <Link to={"/sign-in"}>
                        <a className="underlineHover" href="/#">Kullanıcı Paneline Geç</a>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default AdminSignIn;