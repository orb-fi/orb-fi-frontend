import React, { useMemo } from "react";

import {
  createTheme as createThemeNextUI,
  NextUIProvider,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import TopBar from "../Components/TopBar";
import { createTheme, ThemeProvider } from "@mui/material";
// 2. Call `createTheme` and pass your custom values
const lightTheme = createThemeNextUI({
  type: "light",
});

const darkTheme = createThemeNextUI({
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
  const theme = useMemo(() =>
    createTheme({
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
      shape: {
        borderRadius: 10,
      },
      components: {
        MuiListItemButton: {
          styleOverrides: {
            root: ({ ownerState, theme }) => ({
              "&.Mui-selected": {
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  ".MuiListItemIcon-root": {},
                },
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.white.main,

                ".MuiListItemIcon-root": {
                  color: theme.palette.white.main,
                },
              },
            }),
          },
        },
      },
    })
  );
  return (
    <ThemeProvider theme={theme}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider theme={theme}>{children}</NextUIProvider>
      </NextThemesProvider>
    </ThemeProvider>
  );
};

export default Layout;
