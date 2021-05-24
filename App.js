import "react-native-gesture-handler";
import React from "react";

import ContactContextProvider from "./src/contexts/ContactContext";

import Navbar from "./src/components/Navbar";
import Routes from "./src/Routes";

export default function App() {
  return (
    <>
      <ContactContextProvider>
        <Navbar />
        <Routes />
      </ContactContextProvider>
    </>
  );
}
