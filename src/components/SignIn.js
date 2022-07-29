import React from "react";
import '../components/SignIn.css'
import {useSelector, useDispatch} from "react-redux"
import { changeEmail, changePassword} from '../redux/authSlice'


function SignIn() {
  const email = useSelector((state) => state.auth.email)
  const password = useSelector((state) => state.auth.password)
 

  const dispatch = useDispatch();
 
  const handleEmailChange = (e) =>{
    dispatch(changeEmail(e.currentTarget.value))
  }
  
  const handlePasswordChange = (e) =>{
    dispatch(changePassword(e.currentTarget.value))
  }

  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">

        <h2 class="active"> Sign In </h2>
        <h2 class="inactive underlineHover">Sign Up </h2>

        <div class="fadeIn first">
        <img src="https://www.svgrepo.com/show/4529/user.svg" height={75} width={75} altid="icon" alt="User Icon" />
        </div>


        <form>
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="email" value={email} onChange={handleEmailChange} />
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" 
          value={password} onChange={handlePasswordChange} />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>


        <div id="formFooter">
          <a class="underlineHover" href="/#">Forgot Password?</a>
        </div>

      </div>
    </div>
  );
}

export default SignIn;