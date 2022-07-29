
import {useEffect} from "react"
import {signup, signIn} from "./config/firebase"

const App = (() =>{
  useEffect(() => {
  signup("Admin", "admin@gmail.com", "123456")
  .then(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.log(e);
  });
  signIn("admin@gmail.com", "123456")
  .then(() => {
    console.log("Done");
  })
  .catch((e) => {
    console.log(e);
  });

},[]);
  return <h1>Hİ, APP</h1>
});

export default App;