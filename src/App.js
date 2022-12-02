import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1. Import `createTheme`
import { useDispatch, useSelector } from "react-redux";
import AuthWrapper from "./Utils/AuthWrapper";
import HomePage from "./Routes/HomePage";
import TestPageProtected from "./Routes/TestPage";
import NotFoundPage from "./Routes/NotFoundPage";
import ClaimYourOrb from "./Routes/ClaimYourOrb";
import Layout from "./Utils/Layout";
import LandingPage from "./Routes/LandingPage";
import TopBar from "./Components/TopBar";
function App() {
  const value = useSelector((state) => state.counter.value);

  return (
    <Layout>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/ClaimYourOrb" element={<ClaimYourOrb />} />
          <Route path="/" element={<HomePage />} />
          <Route element={<AuthWrapper />}>
            <Route path="/test" element={<TestPageProtected />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
