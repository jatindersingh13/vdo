
import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import getMoviesFromApi from '../src/api/network'
import { useNavigation } from '@react-navigation/core';


const MovieCards = (data) => {
    
const navigation=useNavigation();
    
const handleonClick = (movieData)=>{
    navigation.navigate('VideoPlayer',{movieData})
      
}

const renderCard = ({ item, index }) => {
    //console.log(item)
    return (
        <TouchableOpacity className=" flex-1" onPress={()=>handleonClick(item)}>

            <Image className="w-40 h-60 px-2 mx-2" source={{ uri: `https://cover.mp4filmy.lol/${item.image}` }} />
        </TouchableOpacity>

    )
}
    return (
        <View className=" mt-5  ">
            <Text className="pt-5 p-3 text-white text-2xl ">{data.title}</Text>

            <FlatList className="  "  showsHorizontalScrollIndicator horizontal data={data.data} renderItem={renderCard} />
        </View>

    )
};

export default MovieCards;


