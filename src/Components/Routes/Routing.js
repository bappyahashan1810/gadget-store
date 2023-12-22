import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLogin from "../Screen/auth/AuthLogin";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route path="login" element={<AuthLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
