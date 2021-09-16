import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import EnTete from '../components/EnTete';
import {useAppSelector} from '../redux/hooks'; 
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

/*
This screen is one of the two screens of the navigation container. 
It has to show the favorite teams of the user.
*/
function Favoris (){
    const favorites = useAppSelector((state) => state.favorite.value);
    let [fontsLoaded] = useFonts({'Tillilium':require('../assets/fonts/Titillium_Web/TitilliumWeb-Regular.ttf')})
    console.log(favorites)
    if (!fontsLoaded){
        return(<AppLoading/>);
    } else {
        return(
            <View>
                <EnTete date={new Date().toLocaleDateString('en-GB')}/>
                {/* It shows the list of marked teams */}
                <FlatList
                    data={favorites}
                    renderItem={({item}) => (
                    <View style = {styles.view}>
                        <Text style = {styles.text}>{item}</Text>
                    </View>
                    )}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view:{
        borderColor:'#900',
        borderRadius:20,
        flexDirection:'row',
        height: 70,
        borderWidth:2,
        alignItems: 'center',
        padding: 20,
        backgroundColor:'white',
        justifyContent: 'space-evenly',
        margin: 5,
    },
    text:{
        fontFamily: 'Tillilium',
        fontSize: 14,
    },
});

export default Favoris;