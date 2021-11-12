import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RacunComp = (props) => {
  console.log(props.racuni);
  console.log(props.racuni.map((x) => parseFloat(x.iznos)));
  const zbroj = props.racuni
    .map((x) => parseFloat(x.iznos))
    .reduce((x, y) => x + y, 0);
  const prosjek = props.racuni != 0 ? zbroj / props.racuni.length : 0;

  return (
    <View style={stilovi.lista}>
      <Text>Ukupno: {zbroj} kn</Text>
      <Text>Prosječna potrošnja: {prosjek} </Text>
    </View>
  );
};

const stilovi = StyleSheet.create({
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#8f153e",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default RacunComp;
