import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();
import Home from './Home'

export const Tabs = () => {
    return <Tab.Navigator screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
            let nombreIcono

            switch (route.name) {
                case 'Home':
                    nombreIcono = focused ? "home" : "home-outline"
                    break;

                case 'Mapa':
                    nombreIcono = focused ? "map" : "map-outline"
                    break;
            
                default:
                    nombreIcono = focused ? "settings" : "settings-outline"
                    break;
            }
            return <Icon name={nombreIcono} size={size} color={color} />
        }
    })}>
                <Tab.Screen name="Home" component={Home} />
            </Tab.Navigator>
}