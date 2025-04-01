import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {user,setUser}=React.useContext(UserDataContext)

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status===201){
      const data=response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="py-7 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 text-white"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-4">
            <input
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2  rounded outline-none px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="First name"
            />
            <input
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="bg-[#eeeeee] w-1/2  rounded outline-none px-4 py-2 text-lg placeholder:text-base"
              required
              type="text"
              placeholder="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 py-2 w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-4 rounded outline-none px-4 py-2 w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
          />

          <button className="bg-[#111] mb-4 rounded outline-none px-4 py-2 w-full text-white font-semibold text-lg placeholder:text-base">
            Create Account
          </button>
        </form>
        <p className="text-center">
          Already have a account?
          <Link to="/login" className="text-blue-600">
            {" "}
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight mb-3">
          By proceeding, you consent to receive emails, including automated
          emails, from Uber and its affiliates at the email address provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
