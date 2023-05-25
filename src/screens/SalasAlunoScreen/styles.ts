import { View,Image, Text } from 'react-native';
import styled from 'styled-components'


export const Container = styled(View)`
    flex:1 ;
    align-items:center ;
    
    justify-content:center ;
    background-color: white;
    padding: 20px;
`

export const Select = styled(View)`
   width: 80%;
   
   height: 40%;
`

export const Card = styled(View)`
    width: 100%;
    height: 100;
    justify-content: center;
    background-color: #f4f4fc;
    margin: 5px;
    padding: 20px;
`

export const Titulo = styled(Text)`
    font-size: 20px;
    font-weight: 700;
`