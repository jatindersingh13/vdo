
import React, { useEffect, useState } from 'react';
import { Alert, Button, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import getMoviesFromApi from '../src/api/network'



const HomeBanner = (upcomingApiData) => {
    return (
        <FlatList className="w-[100%] " pagingEnabled showsHorizontalScrollIndicator horizontal data={upcomingApiData.data} renderItem={renderBanner} />


    )
};

export default HomeBanner;

const renderBanner = ({ item, index }) => {
    return (
        <View className="w-screen flex-1" >

            <ImageBackground className="h-96 flex-1 w-fit  px-1 mx-1 justify-end opacity-95"
                source={{ uri: `https://cover.mp4filmy.lol/${item.image}` }} >
                <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,7)']}
                    className=" h-20 flex-2 flex-row	items-center justify-evenly self-stretch	"  >
                    <Text className="text-white font-bold text-2xl " >
                        Play
                    </Text>
                    <TouchableOpacity className="bg-white rounded-lg w-[30%] flex-row item-center justify-evenly" >
                        <FontAwesomeIcon name="close" size={30} color="black" />
                        <Text className="text-black font-bold text-2xl " >
                            Play
                        </Text>
                    </TouchableOpacity>
                    <Text className="text-white font-extrabold text-2xl " >
                        Info
                    </Text>
                </LinearGradient>
            </ImageBackground>


        </View>


    )
}

