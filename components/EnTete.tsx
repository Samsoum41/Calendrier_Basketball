import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const headStyle = StyleSheet.create({
    viewContainer :{
        flexDirection: 'row',
        height:100,
        paddingLeft: '5%',
        marginTop: 50,
        borderBottomColor:'brown',
        marginBottom: 10,
    },
    textView:{
        flexDirection:'column', 
        width:'85%', 
        marginLeft: 10,
        borderLeftColor: '#900',
        borderLeftWidth: 1,
    },
    logo :{
        height : 100,
        width: '10%',
    },

    date: {
        fontFamily: 'Tillilium',
        fontSize: 20,
        color:'#900',
        marginLeft: 10,
        
    },
    title: {
        fontFamily: 'Tillilium',
        fontSize: 29,
        color:'#900',
        alignSelf: 'baseline',
    },
    dayStyle: {
        color: 'black',
        fontSize: 28,
    }
});
const EnTete = (props) => {
    let [fontsLoaded] = useFonts({'Tillilium' : require('../font/Titillium_Web/TitilliumWeb-Regular.ttf')});
    if (!fontsLoaded) {
        return (<AppLoading/>);
    } else {
        return(
            <View style = {headStyle.viewContainer}>
                <Image source={require('../logo-nba.png')}
                    style = {headStyle.logo} />
                <View style={headStyle.textView}>
                    <Text style={headStyle.title}> Basketball championship</Text>
                    <Text style={headStyle.date}>
                        <Text style= {headStyle.dayStyle}>Day : </Text>{props.date}
                    </Text>
                </View>
            </View>
        ); 
    }

};

export default EnTete;