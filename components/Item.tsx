import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import IconButton from './IconButton';

const Item = (props) =>{
    let [fontsLoaded] = useFonts({'Tillilium':require('../font/Titillium_Web/TitilliumWeb-Regular.ttf')})
    if (!fontsLoaded){
        return(<AppLoading/>);
    } else {
        return(
            <View style={style.item}>
                <IconButton style = {style.leftIcon} team={props.fstTeam}/>
                <Text style={style.text}>{props.fstTeam}</Text>
                <Text style={style.textCenter}> VS </Text>
                <Text style={style.text}>{props.scdTeam}</Text>
                <IconButton style = {style.rightIcon} team={props.scdTeam}/>
            </View>
        );  
    }

}

const style = StyleSheet.create({
    rightIcon: {
        textAlign: 'left'
    },
    leftIcon: {
        textAlign: 'right'
    },
    textCenter:{
        fontFamily: 'Tillilium',
        fontSize: 14,
        width: '6%',
        marginHorizontal: 10,
        textAlign: 'center',
    },
    text:{
        fontFamily: 'Tillilium',
        fontSize: 14,
        width: '33%',
        marginHorizontal: 10,
    },
    item:{
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
    }
})

export default Item;