import React from "react";

import {
  createTheme,
  getDocumentTheme,
  NextUIProvider,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Text, Spacer, Button, Link } from "@nextui-org/react";
import { Switch, changeTheme, useTheme } from "@nextui-org/react";
// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
  // theme: {
  //   colors: {
  //     // brand colors
  //     background: '#1d1d1d',
  //     text: '#fff',
  //     // you can also create your own color
  //     myDarkColor: '#ff4ecd'
  //     // ...  more colors
  //   },
  //   space: {},
  //   fonts: {}
  // }
});

const Layout = ({ children }) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
};

export default Layout;
