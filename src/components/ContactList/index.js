import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ContactContext } from "../../contexts/ContactContext";

import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

export default function ContactList() {
  const { contacts, dispatch } = useContext(ContactContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        style={styles.contactList}
        keyExtractor={(contact) => String(contact.id)}
        onEndReachedThreshold={0.2}
        renderItem={({ item: contact }) => (
          <View style={styles.contact}>
            <Text style={styles.contactProperty}>NOME:</Text>
            <Text style={styles.contactValue}>{contact.name}</Text>

            <Text style={styles.contactProperty}>NÚMERO:</Text>
            <Text style={styles.contactValue}>{contact.phone}</Text>

            <Text style={styles.contactProperty}>EMAIL:</Text>
            <Text style={styles.contactValue}>{contact.email}</Text>
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() =>
                dispatch({ type: "REMOVE_CONTACT", id: contact.id })
              }
            >
              <Text style={styles.detailsButtonText}>Deletar</Text>
              <Feather name="trash" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
