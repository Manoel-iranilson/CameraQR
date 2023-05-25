import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { Body, Container, Logo, QrCode } from "./styles";

export default function HomeAlunoScreen() {
  return (
    <Container>
      <StatusBar backgroundColor="#000" />
      <Body>
        <Logo source={require("../../assets/qrcode.jpeg")} />
        <View>
          <Text>Nome: Manoel Iranilson Vieira Filho</Text>
          <Text>Matricula: 37019466</Text>
        </View>
        <Image source={require("../../assets/uninassau.png")} />
        <Image source={require("../../assets/logos.png")} />
      </Body>
    </Container>
  );
}
