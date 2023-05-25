import { ImageBackground, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  Text,
  Image,
  Button,
  Flex,
  Input,
  Checkbox,
  StatusBar,
} from "native-base";
import { SvgUri, SvgXml } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../../routes/routes";
import { Container } from "./styles";

type LoginScreenProp = NativeStackNavigationProp<
  RootStackParamsList,
  "LoginScreen"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenProp>();
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const Login = () => {
    if (matricula == "37019466" && senha == "123123") {
      navigation.navigate("tabAluno");
    }
    if (matricula == "370100950" && senha == "123123") {
      navigation.navigate("tabProf");
    }
  };

  return (
    <Container>
      <StatusBar backgroundColor="#000" />
      <Box backgroundColor={"white"} borderRadius="3xl" flex={1}>
        <Box h={500} pt={10}>
          <Center>
            <Image source={require("../../assets/uninassau.png")} alt="aa" />
            <Text>Bem Vindo</Text>
            <Text>informe os seus dados para relizar o login</Text>
          </Center>
          <Flex p={10} gap={5}>
            <Input
              value={matricula}
              onChangeText={(text) => setMatricula(text)}
              size="md"
              //   InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
              placeholder="Matricula"
            />
            <Input
              value={senha}
              size="md"
              onChangeText={(text) => setSenha(text)}
              //   InputLeftElement={<Icon size={5} ml="2" color="muted.400" />}
              placeholder="Senha"
            />

            <Checkbox value="a">
              <Text>Lembrar senha</Text>
            </Checkbox>
          </Flex>
        </Box>

        <Box borderRadius="3xl" pt={10}>
          <Flex w={80} justifyContent="flex-end" alignItems="flex-end">
            <Button size="sm" variant={"link"} color="#0386D0">
              Esqueceu a senha
            </Button>
          </Flex>
          <Center>
            <Button
              size="lg"
              w={40}
              borderRadius="full"
              backgroundColor={"#0386D0"}
              onPress={() => Login()}
            >
              Login
            </Button>
          </Center>
        </Box>
      </Box>
    </Container>
  );
}
