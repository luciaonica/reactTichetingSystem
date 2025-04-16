import { useState } from 'react'

function Register () {
  let [register, setRegister] = useState({});
  let [message, setMessage] = useState("");

  const usernameHandler = (event:any) => {
    setRegister({...register, username: event.target.value});
  }

  const passwordHandler = (event:any) => {
    setRegister({...register, password: event.target.value});
  }

  const submitHandler = async () => {
    try {
      let response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let data = await response.json();
      console.log(data);
      setMessage(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Register</h1>

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

export default Register