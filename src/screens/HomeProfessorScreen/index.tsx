import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { Body, Container, Logo, QrCode } from "./styles";

export default function HomeProfessorScreen() {
  return (
    <Container>
      <StatusBar backgroundColor="#000" />
      <Body>
        <View>
          <Logo source={require("../../assets/Janine.jpeg")} />
        </View>
        <View>
          <Text>Nome:Janine freitas de oliveira</Text>
          <Text>Matricula: 370100950</Text>
        </View>
        <Image source={require("../../assets/uninassau.png")} />
        <Image source={require("../../assets/logos.png")} />
      </Body>
    </Container>
  );
}
