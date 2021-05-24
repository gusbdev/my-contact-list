import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ContactContext } from "../../contexts/ContactContext";

import { styles } from "./styles";

const Navbar = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <View>
      <View style={styles.navbar}>
        <Text style={styles.title}>Minha lista de contatos</Text>
        <Text>
          Atualmente você tem {contacts.length} contato(s) armazenado(s)
        </Text>
      </View>
    </View>
  );
};

export default Navbar;
