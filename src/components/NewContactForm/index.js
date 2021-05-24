import React, { useContext, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ContactContext } from "../../contexts/ContactContext";

import { styles } from "./styles";

export default function NewContactForm() {
  const { dispatch } = useContext(ContactContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const getName = (val) => {
    setName(val);
  };
  const getPhone = (val) => {
    setPhone(val);
  };
  const getEmail = (val) => {
    setEmail(val);
  };

  const handleSubmit = () => {
    dispatch({ type: "ADD_CONTACT", contact: { name, phone, email } });
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <>
      <View style={styles.containerTudao}>
        <ScrollView style={styles.container}>
          <View style={styles.contentContainer}>
            <Text>Nome</Text>
            <View style={styles.inputView}>
              <TextInput
                value={name}
                placeholder="Nome"
                style={styles.inputText}
                onChangeText={(value) => getName(value)}
                returnKeyType="next"
              />
            </View>
            <Text>Número</Text>
            <View style={styles.inputView}>
              <TextInput
                value={phone}
                placeholder="Número"
                style={styles.inputText}
                onChangeText={(value) => getPhone(value)}
                returnKeyType="next"
                keyboardType="phone-pad"
              />
            </View>
            <Text>Email</Text>
            <View style={styles.inputView}>
              <TextInput
                value={email}
                placeholder="Email"
                onChangeText={(value) => getEmail(value)}
                style={styles.inputText}
                returnKeyType="done"
                keyboardType="email-address"
              />
            </View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
