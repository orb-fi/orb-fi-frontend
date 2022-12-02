import React, { useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@nextui-org/react";
// 1. Import `createTheme`
import { useDispatch, useSelector } from "react-redux";
import AuthWrapper from "./Utils/AuthWrapper";
import HomePage from "./Routes/HomePage";
import TestPageProtected from "./Routes/TestPage";
import NotFoundPage from "./Routes/NotFoundPage";
import Layout from "./Utils/Layout";
import LandingPage from "./Routes/LandingPage";
import TopBar from "./Components/TopBar";
import { Button, Link, Text } from "@nextui-org/react";
function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // themes
  const theme = useMemo(() =>
    createTheme({
      type: "dark",

      //  mode:mode,

      typography: {
        fontFamily: "Poppins",
        fontWeightSemiBold: 600,
        d2xlReg: {
          fontFamily: "Poppins",
          fontSize: "4.5rem",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: "5.525rem",
        },
        d2xlMed: {
          fontFamily: "Poppins",
          fontSize: "4.5rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: "5.525rem",
        },
        d2xlSmbd: {
          fontFamily: "Poppins",
          fontSize: "4.5rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "5.525rem",
        },
        d2xlBd: {
          fontFamily: "Poppins",
          fontSize: "4.5rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: "5.525rem",
        },
        dxlReg: {
          fontFamily: "Poppins",
          fontSize: "3.75rem",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: "4.625",
        },
        dxlMed: {
          fontFamily: "Poppins",
          fontSize: "3.75rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: "4.625",
        },
        dxlSmbd: {
          fontFamily: "Poppins",
          fontSize: "3.75rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "4.625",
        },
        dxlBd: {
          fontFamily: "Poppins",
          fontSize: "3.75rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: "4.625",
        },
        dlgReg: {
          fontFamily: "Poppins",
          fontSize: "3rem",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: "3.75rem",
        },
        dlgMed: {
          fontFamily: "Poppins",
          fontSize: "3rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: "3.75rem",
        },
        dlgSmbd: {
          fontFamily: "Poppins",
          fontSize: "3rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "3.75rem",
        },
        dlgBd: {
          fontFamily: "Poppins",
          fontSize: "3rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: "3.75rem",
        },
        dmdReg: {
          fontFamily: "Poppins",
          fontSize: "2.25rem",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: "2.75rem",
        },
        dmdMed: {
          fontFamily: "Poppins",
          fontSize: "2.25rem",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          lineHeight: "2.75rem",
        },
        dmdSmbd: {
          fontFamily: "Poppins",
          fontSize: "2.25rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "2.75rem",
        },
        dmdBd: {
          fontFamily: "Poppins",
          fontSize: "2.25rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: "2.75rem",
        },
        dsmReg: {
          fontFamily: "Poppins",
          fontSize: "1.875rem",
          fontWeight: 400,
          lineHeight: "2.375",
        },
        dsmMed: {
          fontFamily: "Poppins",
          fontSize: "1.875rem",
          fontWeight: 500,
          lineHeight: "2.375",
        },
        dsmSmbd: {
          fontFamily: "Poppins",
          fontSize: "1.875rem",
          fontWeight: 600,
          lineHeight: "2.375",
        },
        dSmBd: {
          fontFamily: "Poppins",
          fontSize: "1.875rem",
          fontWeight: 700,
          lineHeight: "2.375",
        },
        dssReg: {
          fontFamily: "Poppins",
          fontSize: "1.625rem",
          fontWeight: 400,
          lineHeight: "2.375rem",
        },
        dssMed: {
          fontFamily: "Poppins",
          fontSize: "1.625rem",
          fontWeight: 500,
          lineHeight: "2.375rem",
        },
        dssSmbd: {
          fontFamily: "Poppins",
          fontSize: "1.625rem",
          fontWeight: 600,
          lineHeight: "2.375rem",
        },
        dssBd: {
          fontFamily: "Poppins",
          fontSize: "1.625rem",
          fontWeight: 700,
          lineHeight: "2.375rem",
        },
        dxsReg: {
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontWeight: 400,
          lineHeight: "2rem",
        },
        dxsMed: {
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontWeight: 500,
          lineHeight: "2rem",
        },
        dxsSmbd: {
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontWeight: 600,
          lineHeight: "2rem",
        },
        dxsBd: {
          fontFamily: "Poppins",
          fontSize: "1.5rem",
          fontWeight: 700,
          lineHeight: "2rem",
        },
        txlReg: {
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontWeight: 400,
          lineHeight: "1.875rem",
        },
        txlMed: {
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontWeight: 500,
          lineHeight: "1.875rem",
        },
        txlSmbd: {
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontWeight: 600,
          lineHeight: "1.875rem",
        },
        txlBd: {
          fontFamily: "Poppins",
          fontSize: "1.25rem",
          fontWeight: 700,
          lineHeight: "1.875rem",
        },
        tlgReg: {
          fontFamily: "Poppins",
          fontSize: "1.125rem",
          fontWeight: 400,
          lineHeight: "1.75rem",
        },
        tlgMed: {
          fontFamily: "Poppins",
          fontSize: "1.125rem",
          fontWeight: 500,
          lineHeight: "1.75rem",
        },
        tlgSmbd: {
          fontFamily: "Poppins",
          fontSize: "1.125rem",
          fontWeight: 600,
          lineHeight: "1.75rem",
        },
        tlgBd: {
          fontFamily: "Poppins",
          fontSize: "1.125rem",
          fontWeight: 700,
          lineHeight: "1.75rem",
        },
        tmdReg: {
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: "1.5rem",
        },
        tmdMed: {
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: 500,
          lineHeight: "1.5rem",
        },
        tmdSmbd: {
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: "1.5rem",
        },
        tmdBd: {
          fontFamily: "Poppins",
          fontSize: "1rem",
          fontWeight: 700,
          lineHeight: "1.5rem",
        },
        tsmReg: {
          fontFamily: "Poppins",
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: "1.25rem",
        },
        tsmMed: {
          fontFamily: "Poppins",
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: "1.25rem",
        },
        tsmSmbd: {
          fontFamily: "Poppins",
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: "1.25rem",
        },
        tSmBd: {
          fontFamily: "Poppins",
          fontSize: "0.875rem",
          fontWeight: 700,
          lineHeight: "1.25rem",
        },
        txsReg: {
          fontFamily: "Poppins",
          fontSize: "0.75rem",
          fontWeight: 400,
          lineHeight: "1.125rem",
        },
        txsMed: {
          fontFamily: "Poppins",
          fontSize: "0.75rem",
          fontWeight: 500,
          lineHeight: "1.125rem",
        },
        txsSmbd: {
          fontFamily: "Poppins",
          fontSize: "0.75rem",
          fontWeight: 600,
          lineHeight: "1.125rem",
        },
        txsBd: {
          fontFamily: "Poppins",
          fontSize: "0.75rem",
          fontWeight: 700,
          lineHeight: "1.125rem",
        },
      },
    })
  );

  return (
    <Layout>
      <TopBar />
      <Router>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
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
