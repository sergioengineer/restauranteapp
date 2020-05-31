import React, { Component } from 'react'
import { Text, StyleSheet, Image, View, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/main'


export default function Cadastro (){

    
    return (
        <>
            <View style={{flex:1}}>
                <Image source={require('../assets/bg.jpg')} style={{position:"absolute"}} blurRadius={2} />
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:15}}> Nome:</Text>
                    <TextInput ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:15}}> Email:</Text>
                    <TextInput ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:15}}> Celular:</Text>
                    <TextInput ></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:15}}> Senha:</Text>
                    <TextInput ></TextInput>
                </View>
                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>
                        Cadastrar
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )

}
