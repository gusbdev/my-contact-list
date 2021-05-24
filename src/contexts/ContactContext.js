import React, { createContext, useReducer, useEffect } from "react";
import { contactReducer } from "../reducers/ContactReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const ContactContext = createContext();

async function loadStorage() {
  const contacts = await AsyncStorage.getItem("contacts");
  if (contacts) {
    return await AsyncStorage.getItem("contacts");
  }
}

const ContactContextProvider = (props) => {
  const [contacts, dispatch] = useReducer(contactReducer, [], () => {
    const localData = loadStorage();
    console.log(contacts);
    return localData ? localData : [];
  });

  useEffect(() => {
    const setDataStorages = () => {
      if (contacts !== undefined) {
        return AsyncStorage.setItem("contacts", JSON.stringify(contacts));
      }
    };
    setDataStorages();
  }, [contacts]);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContextProvider;
