import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import styles, {colorContext} from '../styles/main';
import Login from './Login';
import Home from './Home';
import Cadastro from './Cadastro';

const MainNav = createBottomTabNavigator();
export const userToken = null;
export default function index() {
  const colors = React.useContext(colorContext);


  return (
    <>

          
      <NavigationContainer>
        <MainNav.Navigator tabBarOptions={{inactiveBackgroundColor: colors.branco, activeBackgroundColor: colors.primaria,
        activeTintColor: colors.branco, inactiveTintColor: colors.primaria, showLabel: false}} >
          {userToken == null ? (
            <>
              <MainNav.Screen 
              options={{tabBarIcon: ({color, size}) => (<FontAwesomeIcon color={color} size={30} icon={faUser}></FontAwesomeIcon>), }} 
              name="Login"   component={Login}  /> 

              <MainNav.Screen  name='Cadastro'
              options={{tabBarIcon: ({color, size}) => (<FontAwesomeIcon color={color} size={35}
              icon={faUserPlus}></FontAwesomeIcon>), }}
              component={Cadastro}/>
            </>
          ) : (
            <>
              <MainNav.Screen name="Home" component={Home} />
              <MainNav.Screen name="Cadastro" component={Cadastro} />
            </>
          )}
        </MainNav.Navigator>
      </NavigationContainer>
    </>
      
  );
}

