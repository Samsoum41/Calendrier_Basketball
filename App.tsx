import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favoris from './screens/Favoris';
import HomeScreen from './screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './redux/store';


const Tab = createBottomTabNavigator();
/* This component serves to wrap the application in the redux store for using a global state for favorites 
   and the Navigation container for of the home screen and the favorite screen. 
*/
export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: prop => (
              <Ionicons name="basketball-outline"  size ={prop.size} color={prop.color}/>
            )
          }}/>
          <Tab.Screen name="Settings" component={Favoris} options={{
            tabBarIcon: prop => (
              <Ionicons name = "star-outline" size ={prop.size}  color ={prop.color}/>
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer> 
    </Provider>
  );
}