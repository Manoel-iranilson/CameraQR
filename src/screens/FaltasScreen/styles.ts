import { View,Image, Text,TextInput } from 'react-native';
import styled from 'styled-components'


export const Container = styled(View)`
    flex:1 ;
    align-items:center ;
    padding: 50px;
    background-color: white;
    
`
export const Input = styled(TextInput)`
   border-Color: #0293FF;
   background-color: white;
    width: 100%;
    height: 50;
    border-Width: 1;
    border-Radius: 10;
    padding: 10px;
`

export const Card = styled(View)`
    width: 100%;
    height: 100;
    justify-content: center;
    background-color: #f4f4fc;
    margin: 20px;
`