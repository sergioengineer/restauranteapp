import React, { Component } from 'react';

import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../styles/main';

export default function Home ({route, navigation}) {


    const {email} = 'route';
    const {password} = 'route';

    navigation.setOptions({title: 'Olá, ' + email});

    return (
        <>
            <View style={styles.container}>
                <Text>
                    Bem vindo à Home page
                    
                    email: {email}
                    senha: {password}
                </Text>
            </View>
        </>
    );
}

