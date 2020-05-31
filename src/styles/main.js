import {StyleSheet} from 'react-native';
import * as React from 'react'

const colors = {
  
  primaria02: '#B6EB70',
  primaria01: '#98D746',
  primaria : '#7FCA1E',
  primaria1: '#61A00E',
  primaria2: '#467D00',
  
  
  branco : '#eee',
  
 
  secundaria02: '#FFFF7A',
  secundaria01: '#EBEB4C',
  secundaria : '#DDDD21',
  secundaria1: '#B0B00F',
  secundaria2: '#898900',



  terciaria02: '#57B791',
  terciaria01: '#34A075',
  terciaria: '#169763',
  terciaria1: '#0A774B',
  terciaria2: '#005D38', 
}



const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: colors.branco,
      alignItems: "center",
      paddingTop: '30%',
    },
    Texto:{
      color: colors.verde,
    },
    logo:{
      width: 70,
      height: 70,
      borderRadius: 100,
      alignSelf:'flex-start',
      marginTop:20,
      marginLeft: 10,
      marginBottom:'22%'      

    },
    loginText:{
      color:colors.primaria2,
      marginTop:10,
      width:'90%',
      backgroundColor: colors.branco,
      borderRadius:5,
      textAlign:"center"
    },
    loginButton:{
      width:'90%',
      height:42,
      justifyContent:"center",
      alignItems:"center",
      
      borderRadius:5,
      backgroundColor:colors.primaria,
      marginTop:30
    },
    loginButtonText:{
      color: colors.branco,
      fontWeight: "bold",
      fontSize: 18
    },
    registerButton:{
      width:'90%',
      height:42,
      justifyContent:"center",
      alignItems:"center",
      alignSelf:'center',
      borderRadius:5,
      backgroundColor:colors.primaria,
      marginTop:'80%'
    },
    registerButtonText:{
      color: colors.branco,
      fontWeight: "bold",
      fontSize: 18
    },
    loginForgottenPasswordText:{
      marginTop:5,
      color:colors.secundaria

    },
    loginIntroText:{
      fontSize: 18,
      fontWeight: '900',
      fontFamily: 'JosefinSans-Italic',
      color:colors.secundaria01,
      alignSelf: 'flex-start',
      marginLeft:10
    },
    loginIntroTextLogin:{
      fontSize:35,
      color:colors.secundaria,
      fontFamily: 'JosefinSans-BoldItalic',
      alignSelf: 'center',
      marginLeft: 0,
      marginBottom: 20
    },
    mainHeader: {
      backgroundColor: colors.primaria
    }
  });
export default styles;
export const colorContext = React.createContext(colors) 