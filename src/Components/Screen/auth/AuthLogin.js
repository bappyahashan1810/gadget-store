import React from "react";

const AuthLogin = () => {
  return (
    <div className="h-screen bg-black flex justify-center items-center   ">
      <form className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 capitalize">
        <div className="flex justify-start items-center mb-5">
          <h1 className="text-xl font-bold text-white capitalize">LogIn</h1>
        </div>
        <div className="">
          <input
            className="w-full form-component mb-3"
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
          />
        </div>
        <div>
          <input
            className="w-full form-component mb-3"
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
          />
        </div>
        <div>
          <input className="btn-indigo w-full" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default AuthLogin;
