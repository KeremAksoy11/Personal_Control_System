import { useDispatch, useSelector } from "react-redux"
import { changeEmail, ForgotPass } from "../redux/authSlice"
import { Link } from "react-router-dom";
import Loading from '../components/Loading'

export default function ForgotPassword() {
  const email = useSelector((state) => state.auth.email)
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading)

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.currentTarget.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ForgotPass(email))
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        <br></br>

        <div className="fadeIn first">
          <img src="https://www.svgrepo.com/show/4529/user.svg" height={50} width={50} altid="icon" alt="User Icon" />
        </div>

        <form onSubmit={handleSubmit}>
          <p className="text-center" style={{ color: "#39ace7" }}>Email</p>
          <input type="email" id="login" className="fadeIn second" name="login"
            onChange={handleEmailChange} value={email} />


          <button type="submit" disabled={isLoading} className="fadeIn fourth">{isLoading ? <Loading /> : "Get Code"}</button>

        </form>

        <div id="formFooter">
          <Link to={"/sign-in"}>
            <a className="underlineHover" href="/#">Şifremi Hatırladım</a>
          </Link>
        </div>
      </div>
    </div>
  )
}