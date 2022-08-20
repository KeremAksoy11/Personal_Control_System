import React from "react";
import '../components/SignUp.css'
import {useSelector, useDispatch} from "react-redux"
import {changeName, changeEmail, changePassword, register} from '../redux/authSlice'
import Loading  from './Loading'
import {Link} from 'react-router-dom'

function SignUp() {
  const name = useSelector((state) => state.auth.name)
  const email = useSelector((state) => state.auth.email)
  const password = useSelector((state) => state.auth.password)
  const error = useSelector((state) => state.auth.error)
  const isLoading = useSelector((state) => state.auth.isLoading)
  

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

  const handleSubmit = (e)=> {
    e.preventDefault()
    dispatch(register({name , email, password}))
  };

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
      <Link to={"/sign-in"}>
        <h2 className="inactive underlineHover"> Sign In </h2>
      </Link>
        <h2 className="active">Sign Up </h2>

        <div className="fadeIn first">
        <img src="https://www.svgrepo.com/show/4529/user.svg" height={75} width={75} altid="icon" alt="User Icon" />
        </div>
        {error && (
          <h5 className="small" style={{ color : "red"}}>{error}</h5>
        )}


        <form onSubmit={handleSubmit}>
          <p className="text-center" style={{color:"#39ace7"}}>Name</p>
       <input type="text" id="name" className="fadeIn second" name="login" autoFocus onChange={handleNameChange} value={name} />
       <p className="text-center" style={{color:"#39ace7"}}>Email</p>
          <input type="email" id="login" className="fadeIn second" name="login"
           onChange={handleEmailChange} value={email}/>
         <p className="text-center" style={{color:"#39ace7"}}>Password</p>
          <input type="password" id="password" className="fadeIn third" name="login" 
          onChange={handlePasswordChange} value={password}/>
          <button type="submit" disabled={isLoading} className="fadeIn fourth">{isLoading ? <Loading/> : "Sign In"  }</button>
        </form>


        <div id="formFooter">
          
        </div>

      </div>
    </div>
  );
}

export default SignUp;