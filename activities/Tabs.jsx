import React, { useState } from 'react';
import {TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Wallet from './Wallet';

const Tab = createBottomTabNavigator();

export const Tabs = ({ navigation }) => {
    const [balance, setBalance] = useState(4500.97);

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let nombreIcono;
                switch (route.name) {
                    case 'Home':
                        nombreIcono = focused ? "home" : "home-outline";
                        break;
                    case 'Wallet':
                        nombreIcono = focused ? "wallet" : "wallet-outline";
                        break;
                    default:
                        nombreIcono = "ellipse-outline";
                        break;
                }
                return <Icon name={nombreIcono} size={size} color={color} />;
            },
            headerTitleAlign: 'center',
            headerRight: () => (
                <TouchableOpacity  onPress={() => {navigation.replace('Login');}}>
                    <Icon name="log-out-outline" size={25} color="#000" />
                </TouchableOpacity>
            ),
        })}>
            <Tab.Screen name="Home">
                {props => <Home {...props} balance={balance} setBalance={setBalance}  />}
            </Tab.Screen>
            <Tab.Screen name="Wallet">
                {props => <Wallet {...props} balance={balance}  setBalance={setBalance} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
};
