import { View, Text, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import { Card, Container, Input } from "./styles";

export default function FaltasScreen(props) {
  const [pesquisa, setPesquisa] = useState("");

  const lista = [
    "Manoel Iranilson",
    "jose Ednario",
    "Davi oliveira",
    "isaac Nogueira",
  ];
  return (
    <Container>
      <Text>{props.route.params.data}</Text>
      <Input placeholder="Buscar" />
      {lista.map((e) => (
        <Card>
          <Text>{e}</Text>
        </Card>
      ))}
    </Container>
  );
}
