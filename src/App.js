import React from "react";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Watch from "./pages/watch/Watch";

function App() {
  const user = true;
  const navigate = useNavigate();
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={user ? <Home /> : navigate("/register")} />
        <Route
          path="/register"
          element={!user ? <Register /> : navigate("/")}
        />
        <Route path="/login" element={!user ? <Login /> : navigate("/")} />

        {user && (
          <>
            (<Route path="/movies" element={<Home type="movies" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />)
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
