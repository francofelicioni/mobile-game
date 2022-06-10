import { Button, Dimensions, Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import { Card } from "../../components/index";
import Colors from "../../constants/colors";
import { styles } from "./styles";

const GameOver = ({ rounds, choise, onRestart }) => {
  const [isPortrait, setIsPortrait] = useState(true);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const statePortrait = () => setIsPortrait(onPortrait());

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
    return () => {
      Dimensions.removeEventListener("change", statePortrait);
    };
  });

  return (
    <View style={isPortrait ? styles.container : styles.containerLandscape}>
      <Image
        style={isPortrait ? styles.image : styles.imageLandscape}
        source={{
          uri: "https://img.freepik.com/vector-gratis/game-over-estilo-retro-pixel-art-design-glitch-ruido-aislado-sobre-fondo-blanco-concepto-nivel-final-juegos-virtuales-o-interfaz-usuario-clasica-videojuegos-online-ilustracion-vectorial_342166-224.jpg?w=600 ",
        }}
      />
      <Card style={isPortrait ? styles.resultContainer : styles.resultContainerLandscape}>
        <Text style={styles.restultText}>Round: {rounds} </Text>
        <Text style={styles.restultText}>Number was: {choise}</Text>
      </Card>
      <Button title="Reset" 
              onPress={onRestart} 
              color={Colors.primary} 
      />
    </View>
  );
};

export default GameOver;