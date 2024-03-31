import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Video from 'react-native-video';

const VideoPlayer = ({ route }) => {
    //const movieDetailData= route.params.movieData
    const { title, image, genre, id, category, description } = route.params.movieData
    // console.log(image)

    const [videoVisible, setVideoVisible] = useState()
 
    return (
        <ScrollView className="flex-1 ">
            <View className="mt-6 flex-1 bg-black    h-screen">

                <StatusBar backgroundColor={'red'} />
                {
                    //Alert.alert(image)
                    videoVisible ?
                        (
                            <Text>Player</Text>
                        )

                        : (

                            <Image className="w-full h-1/2  " source={{ uri: `https://cover.mp4filmy.lol/${image}` }} />
                        )
                }

                <View className="px-1 mt-3">
                    <View className="flex-row items-center">
                        <Text className="text-gray-300 tracking-widest text-xl">{category}</Text>

                    </View>
                    <View className="mt-2 flex-row items-center">
                        <Text className="text-white text-2xl font-bold">{title}</Text>

                    </View>

                    <View className="mt-2 flex-row items-center">
                        <Text className="text-white text-xl ">2024  </Text><Text className="text-gray-400 text-xl "> I  </Text><Text className="text-white text-xl "> 7.5</Text>

                    </View>
                    <View>
                        <TouchableOpacity onPress={() => setVideoVisible(true)} className="bg-white rounded-lg mt-3" ><Text className=" p-3 text-xl font-bold text-center">Play</Text></TouchableOpacity>
                        <TouchableOpacity className="bg-gray-900 rounded-lg mt-3"  ><Text className="text-white p-3 text-xl font-bold text-center">Trailer</Text></TouchableOpacity>
                    </View>
                    <View className="mt-2 flex-row items-center">
                        <Text className="text-white text-xl mt-5">{description}  </Text>
                    </View>

                </View>





            </View>
        </ScrollView>

    )
}

export default VideoPlayer

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });