import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
// import axios from "axios"

export function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isLogged } = useUser();
  // const [error, setError]= useState()

  useEffect(() => {
    if (isLogged) navigate("/");
  },[isLogged, navigate]);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    login({ email, password });
           
    // const res = await axios.post("https://m-newapi.herokuapp.com/users/login", 
    // { mode: 'cors'})
    // console.log(res);

    //    setError('')
    //     try{
    //         if (isLogged) navigate('/')
    //     } catch (error) {
    //       setError(error.message)
    //     }

  };

  return (
    <div className="my-5 col-md-4 offset-md-4">
      {/* {error && <p>{error}</p>} */}
      <div className="card bg-dark text-light rounded-0 p-4">
      <div className="card-body">
          <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input className="form-control bg-dark text-light my-3 rounded-0"
            type="email"
            name="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input className="form-control bg-dark text-light my-3 rounded-0"
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            value={password}
          />

          <div className="my-3">
            <button className="btn btn-secondary rounded-0 w-100">Login</button>
            <a href="#!" /*onClick={handleResetPassword}*/>Forgot Password</a>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}
