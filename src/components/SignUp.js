import React from "react";
import '../components/SignUp.css'
import {useSelector, useDispatch} from "react-redux"
import {changeName, changeEmail, changePassword} from '../redux/authSlice'

function SignUp() {
  const name = useSelector((state) => state.auth.name)
  const email = useSelector((state) => state.auth.email)
  const password = useSelector((state) => state.auth.password)
 
  

  const dispatch = useDispatch();

  const handleNameChange = (e) =>{
    dispatch(changeName(e.currentTarget.value))

  }
  
  const handleEmailChange = (e) =>{
    dispatch(changeEmail(e.currentTarget.value))
  }
  
  const handlePasswordChange = (e) =>{
    dispatch(changePassword(e.currentTarget.value))
  }

  return (
    <div class="wrapper fadeInDown">
      <div id="formContent">

        <h2 class="inactive underlineHover"> Sign In </h2>
        <h2 class="active">Sign Up </h2>

        <div class="fadeIn first">
        <img src="https://www.svgrepo.com/show/4529/user.svg" height={75} width={75} altid="icon" alt="User Icon" />
        </div>


        <form>
        <input type="text" id="name" class="fadeIn second" name="login" placeholder="name" autoFocus onChange={handleNameChange} value={name} />
          <input type="text" id="login" class="fadeIn second" name="login" placeholder="email" 
           onChange={handleEmailChange} value={email}/>
          <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"
          onChange={handlePasswordChange} value={password}/> />
          <input type="submit" class="fadeIn fourth" value="Log In" />
        </form>


        <div id="formFooter">
          <a class="underlineHover" href="/#">Forgot Password?</a>
        </div>

      </div>
    </div>
  );
}

export default SignUp;