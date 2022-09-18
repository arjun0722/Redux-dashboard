import React from "react";
import { useState } from "react";
import "./SignIn.css";
function SignIn() {
  const initialValue = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialValue);
  const getInput = (e) => {
    const { value, name } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const submitInput = (e) => {
    e.preventDefault();
    console.log(input)
    const multiple = JSON.parse(localStorage.getItem("students") || "[]")
    input.id = Date.now() ; 
    multiple.push(input)
    localStorage.setItem("students" , JSON.stringify(multiple))
    setInput({
      email: "",
      password: "",
    })
  };
  return (
    <div className="mainelem">
      <div>
        <form className="form">
          <h1>CRUD OPERATIONS</h1>
          <h4>SIGN IN</h4>
          <h6>Enter your credentials to access your account</h6>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                onChange={getInput}
                name="email"
                value={input.email}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={input.password}
                name="password"
                onChange={getInput}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button onClick={submitInput} type="submit" className="button">
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
