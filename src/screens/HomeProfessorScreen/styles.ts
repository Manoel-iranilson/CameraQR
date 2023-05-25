import { View,Image, Text } from 'react-native';
import styled from 'styled-components'


export const Container = styled(View)`
    flex:1 ;
    align-items:center ;
    background-color: white;
`



export const Body = styled(View)`
    display: flex;
     justify-content: space-between;
     
     align-items: center;
     height:100%;
     padding-top: 40px;
     padding-bottom: 40px;
`
export const Logo = styled(Image)` 
width: 300px;
height: 300px;
border-radius: 150px;
border-width: 1px;
border-color: #0293FF;
`


export const QrCode = styled(View)`
    height: 200px;
    width: 200px;
    background-color: red;
`