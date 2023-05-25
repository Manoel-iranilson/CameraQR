import { View, Text } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { Calendario, Container, Select } from "./styles";
import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
export default function SalasProfScreen() {
  const navigation = useNavigation();
  const [sala, setSala] = useState("");
  const [data, setData] = useState("");

  const countries = [
    "1° Semestre de Sistemas",
    "2° Semestre de Sistemas",
    "3° Semestre de Sistemas",
    "4° Semestre de Sistemas",
  ];

  const VerTurma = () => {
    if (sala != "" && data != "") {
      navigation.navigate("FaltasScreen", { data: data });
    } else {
      alert("Verifique todos os dados");
    }
  };

  return (
    <Container>
      <Select>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
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
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </Select>

      <Calendario>
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: "#0293FF",
            borderRadius: 20,
            height: 350,
          }}
          theme={{
            selectedDayTextColor: "#fff",

            selectedDayBackgroundColor: "#00adf5",
            todayTextColor: "#00adf5",
          }}
          onDayPress={(day) => {
            setData(day.dateString);
            VerTurma();
          }}
        />
      </Calendario>
    </Container>
  );
}
