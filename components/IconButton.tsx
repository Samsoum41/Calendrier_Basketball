import React from 'react';
import { useRef } from "react";
import { View, Animated, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {add, drop } from '../redux/favoriteSlice';


const IconButton = (props) => { 
    const team:string = props.team;
    const initialStarSize:number = 1;
    const finalStarSize:number = 1.5;
    const favorites = useAppSelector((state) => state.favorite.value);
    const dispatch = useAppDispatch();
    let starSize = useRef(new Animated.Value(initialStarSize)).current;
    const AnimatedIcon = Animated.createAnimatedComponent(Icon);
    const starName:string = favorites.includes(team)? 'star':'star-o';
    const color:string = favorites.includes(team)? '#900': '#000000';

    // This function defines the animation of clicked star sizes. First they grow, then they shrink back to their initial size.
    const changeStarSize = () => {
        Animated.sequence([
            Animated.timing(starSize, {
                toValue: finalStarSize,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(starSize, {
                toValue: initialStarSize,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();
    };

    // This function start the animation and update the redux state of favorites. 
    const handlePress = () => {
        changeStarSize();
        favorites.includes(team) ? dispatch(drop(team)) : dispatch(add(team));
    }
    return(
        <View>
            <Pressable onPress={handlePress}>
                <AnimatedIcon name= {starName} style={{ fontSize: 30, color: color,  transform: [{scale: starSize}] }} />
            </Pressable>
        </View>
    );
};

export default IconButton;