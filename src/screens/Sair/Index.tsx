import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Sair() {
  function Sair() {
    alert("saiu");
  }

  return (
    <TouchableOpacity onPress={() => Sair()}>
      <Text>Index</Text>
    </TouchableOpacity>
  );
}
