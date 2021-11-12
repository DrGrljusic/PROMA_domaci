import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ImageBackground,
} from "react-native";
import RacunComp from "./components/RacunComp";
import ListaComp from "./components/ListaComp";
import UnosComp from "./components/UnosComp";

const image = {
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Solid_white_bordered.svg/2048px-Solid_white_bordered.svg.png",
};

export default function App() {
  const [racuni, postaviRacun] = useState([]);
  const [unosVidljiv, postaviVidljivost] = useState(false);

  const noviRacun = (opis, cijena) => {
    const noviObjekt = {
      tekst: opis,
      iznos: cijena,
      key: Math.random().toString(),
    };
    postaviRacun((ciljevi) => [...ciljevi, noviObjekt]);
    postaviVidljivost(false);
  };

  const brisiRacun = (ciljID) => {
    postaviRacun((racuni) => {
      return racuni.filter((c) => c.key !== ciljID);
    });
  };

  const ugasiModal = () => postaviVidljivost(false);

  return (
    <View style={stilovi.ekran}>
      <ImageBackground source={image} resizeMode="cover" style={stilovi.image}>
      </ImageBackground>
      <UnosComp
        postaviRacun={noviRacun}
        vidljiv={unosVidljiv}
        odustani={ugasiModal}
      />
      <Button title="Novi račun" onPress={() => postaviVidljivost(true)} />
      <FlatList
        data={racuni}
        renderItem={(el) => (
          <ListaComp
            naslov={el.item.tekst}
            iznos={el.item.iznos}
            brisanje={brisiRacun}
            id={el.item.key}
          />
        )}
      />
      <RacunComp racuni={racuni} />
    </View>
  );
}

const stilovi = StyleSheet.create({
  ekran: {
    flex: 1
  },
  unos: {
    width: "70%",
    marginBottom: 5,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  lista: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#34ebd2",
    borderColor: "black",
    borderWidth: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
