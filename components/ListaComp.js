import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListaComp = (props) => {
  const dodir = () => {
    console.log("Dodir na element liste");
  };

  return (
    <TouchableOpacity onPress={props.brisanje.bind(this, props.id)}>
      <View style={stilovi.lista}>
        <Text>
          {props.naslov} ({props.iznos} kn)
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const stilovi = StyleSheet.create({
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#009499",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ListaComp;
