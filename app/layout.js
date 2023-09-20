"use client";
import "./globals.css";
require("dotenv").config();
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from 'react-redux'
import { store } from "@/store/store";
import Nev from "@/app/Components/Nev";

// export const metadata = {
//   title: "Cenema | movie filter",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <NextUIProvider>
          <Provider store={store}>
            <Nev/>
          {children}
        
          </Provider>
        </NextUIProvider>
      </body>
    </html>
  );
}
