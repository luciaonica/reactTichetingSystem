import { useState } from 'react'

function Login() {
    let [login, setLogin] = useState({});
    let [message, setMessage] = useState("");
  
    const usernameHandler = (event:any) => {
      setLogin({...login, username: event.target.value});
    }
  
    const passwordHandler = (event:any) => {
      setLogin({...login, password: event.target.value});
    }
  
    const submitHandler = async () => {
      try {
        let response = await fetch("http://localhost:3000/users/login", {
          method: "POST",
          body: JSON.stringify(login),
          headers: {
            "Content-Type": "application/json"
          }
        });
        let data = await response.json();
        console.log(data);
        setMessage(data.message);
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <>
      <h1>Login</h1>

      <h3>{message}</h3>

      <div>
        <input onChange={usernameHandler} type="text" placeholder='username'/>
        <br />
        <input onChange={passwordHandler} type="password" placeholder='password'/>
        <br />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  )
}

export default Login