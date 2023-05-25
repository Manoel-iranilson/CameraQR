import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Card, Container, Select, Titulo } from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/AntDesign";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default function SalasAlunoScreen() {
  const [sala, setSala] = useState("");
  const [list, setList] = useState([]);

  const countries = [
    "Analise e desenvolvimento de Sistemas",
    "Programação Avançada",
    "Engenharia de Software",
    "Redes de Computadores",
  ];

  const lista = [
    "Dia 20/05/2023",
    "Dia 20/05/2023",
    "Dia 04/05/2023",
    "Dia 01/04/2023",
  ];

  return (
    <Container>
      <Select>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            setList(lista);
            setSala(selectedItem);
          }}
          renderDropdownIcon={() => (
            <Icon name="down" size={20} color="#0293FF" />
          )}
          defaultButtonText="Selecione uma materia"
          buttonStyle={{
            width: "100%",
            borderBottomColor: "#0293FF",
            borderBottomWidth: 1,
            backgroundColor: "#fff",
          }}
          buttonTextStyle={{
            color: "#0293FF",
          }}
        />
      </Select>
      <Titulo>Faltas</Titulo>
      {list.map((e) => (
        <Card>
          <Text>{e}</Text>
        </Card>
      ))}
    </Container>
  );
}
