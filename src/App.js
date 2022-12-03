import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// 1. Import `createTheme`
import { useDispatch, useSelector } from "react-redux";
import AuthWrapper from "./Utils/AuthWrapper";
import HomePage from "./Routes/HomePage";
import TestPageProtected from "./Routes/TestPage";
import OnboardingScreenOne from "./Routes/OnboardingScreenOne";
import NotFoundPage from "./Routes/NotFoundPage";
import ClaimYourOrb from "./Routes/ClaimYourOrb";
import EnterName from "./Routes/EnterName";
import Layout from "./Utils/Layout";
import ConnectWallet from "./Routes/ConnectWallet";
import LandingPage from "./Routes/LandingPage";
import OrbWalletPage from "./Routes/OrbWalletPage";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboardone" element={<OnboardingScreenOne />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/claimyourorb" element={<ClaimYourOrb />} />
          <Route path="/entername" element={<EnterName />} />
          <Route element={<AuthWrapper />}>
            <Route path="/test" element={<TestPageProtected />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/orbwallet" element={<OrbWalletPage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
