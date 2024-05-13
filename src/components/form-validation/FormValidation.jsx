import React, { useState } from "react";

const FormValidation = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    validateInput(name, value);
  }

  function validateInput(getName, getValue){
    switch(getName){
      case 'username' : setErrors(prevErrors=>({
        ...prevErrors,
        username: getValue.length < 3 ? 'Username must be at least three characters' : ''
      }));
        break;
      case 'email' : setErrors(prevErrors=>({
        ...prevErrors,
        email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(getValue) ? '' : 'Invalid email address'
      }));
        break;
      case 'password' : setErrors(prevErrors=>({
        ...prevErrors,
        password: getValue.length < 5 ? 'Password must be at least five characters' : ''
      }));
        break;
      default :
        break;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  console.log(formData);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center bg-green-200 w-full">
        Simple Form Validation
      </h1>
      <div className="flex flex-col gap-4 mt-4 bg-slate-300 p-4 w-96 rounded-md">
        <form action="" onSubmit={handleFormSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
            <label htmlFor="username" className="text-xl w-24">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleFormChange}
              className="outline-none p-1 rounded-md w-64"
            />
            </div>
            <span className="text-center text-red-600">{errors?.username}</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
            <label htmlFor="email" className="text-xl w-24">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleFormChange}
              className="outline-none p-1 rounded-md w-64"
            />
            </div>
            <span className="text-center text-red-600">{errors?.email}</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
            <label htmlFor="password" className="text-xl w-24">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleFormChange}
              className="outline-none p-1 rounded-md w-64"
            />
            </div>
            <span className="text-center text-red-600">{errors?.password}</span>
          </div>
          <button type="submit" className="text-md text-white bg-blue-800 rounded-md p-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
