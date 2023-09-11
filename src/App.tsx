import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Games from "./pages/Games/Games";
import Art from "./pages/Art/Art";
import Toys from "./pages/Toys/Toys";
import Pages from "./pages/Web/Web";
import Admin from "./admin/Admin/Admin";
import NavWheel from "./components/NavWheel/NavWheel";
import Empty from "./pages/Empty/Empty";

import SingleGame from "./admin/Form/Game";
import SingleArt from "./admin/Form/Art";
import SinglePage from "./admin/Form/Page";
import SingleToy from "./admin/Form/Toy";

import { pageColors } from "./utils/constants_colors";

import Home from "./pages/Home/Home";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";
import ProtectedWrapper from "./auth/ProtectedWrapper";
import Login from "./admin/Form/Login";
import Logout from "./auth/Logout";

function App() {
  const [backgroundColor, setBackgroundColor] = useState<string>("home");
  const locatation = useLocation();

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  useEffect(() => {
    let colorName = window.location.pathname.slice(1);
    if (colorName == "") colorName = "home";
    setBackgroundColor(pageColors[colorName]);
  }, []);

  const isAuthenticated = localStorage.getItem("token") ? true : false;

  const shouldDisplayNavWheel = (path: string) => {
    const navPaths = ["/games", "/art", "/toys", "/web", "/"];
    return navPaths.includes(path);
  };

  return (
    <div className='App' style={{ backgroundColor: backgroundColor }}>
      <div className='bg-image'></div>
      <ParticleBackground />
      {shouldDisplayNavWheel(locatation.pathname) && (
        <NavWheel onColorChange={handleColorChange} />
      )}
      <Logout />
      <Routes>
        <Route path='/games' element={<Games />} />
        <Route path='/art' element={<Art />} />
        <Route path='/toys' element={<Toys />} />
        <Route path='/web' element={<Pages />} />
        <Route path='/' element={<Home />} />

        <Route path='/admin/login' element={<Login />} />

        <Route
          path='/admin'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <Admin />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/games'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SingleGame />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/games/:id'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SingleGame />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/pages'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SinglePage />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/pages/:id'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SinglePage />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/art'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SingleArt />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/art/:id'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SingleArt />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/toys'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SingleToy />
            </ProtectedWrapper>
          }
        />

        <Route
          path='/admin/create/toys/:id'
          element={
            <ProtectedWrapper isAuthenticated={isAuthenticated}>
              <SingleToy />
            </ProtectedWrapper>
          }
        />
        <Route path='*' element={<Empty />} />
      </Routes>
    </div>
  );
}

export default App;
