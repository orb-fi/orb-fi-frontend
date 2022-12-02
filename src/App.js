import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDocumentTheme, NextUIProvider } from "@nextui-org/react";
import { Text, Spacer, Button, Link } from "@nextui-org/react";
import { Switch, changeTheme, useTheme } from "@nextui-org/react";
import { createTheme } from "@nextui-org/react";
// 1. Import `createTheme`
import { useDispatch, useSelector } from "react-redux";

import AuthWrapper from "./Utils/AuthWrapper";
import HomePage from "./Routes/HomePage";
import TestPageProtected from "./Routes/TestPage";
import NotFoundPage from "./Routes/NotFoundPage";
import Layout from "./Utils/Layout";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Layout>
      <Router>
        <Routes>
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
