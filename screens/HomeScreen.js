import { ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeBanner from '../components/homeBanner';
import MovieCards from '../components/MovieCards';
import { PunjabiList, HindiList,HollywoodList,SouthList, handleUpDatesApi } from '../src/api/network';

 
const HomeScreen = () => {
 
    const [punjabiData, setPunjabiData] = useState([]);
    const [hindiData, setHindiData] = useState([]);
    const [hollywoodData, setHollywoodData] = useState([]);
    const [southData, setSouthData] = useState([]);
    const [updateData, setUpdateData] = useState([]);

    useEffect(() => {

        const handlePunjabi = async () => {
            const { data, status } = await PunjabiList();
            if (status === 200) {
                setPunjabiData(data.data);
            }
            else {

            }

        }

        handlePunjabi();
    }, []);

    useEffect(() => {

        const handleHindi = async () => {
            const { data, status } = await HindiList();
            if (status === 200) {
                setHindiData(data.data);
            }
            else {

            }

        }

        handleHindi();
    }, []);

    useEffect(() => {

        const handleHollywood = async () => {
            const { data, status } = await HollywoodList();
            if (status === 200) {
                setHollywoodData(data.data);
            }
            else {

            }

        }

        handleHollywood();
    }, []);

    useEffect(() => {

        const handleSouth = async () => {
            const { data, status } = await SouthList();
            if (status === 200) {
                setSouthData(data.data);
            }
            else {

            }

        }

        handleSouth();
    }, []);


    useEffect(() => {

        const handleUpDates = async () => {
            const { data, status } = await handleUpDatesApi();
            if (status === 200) {
                setUpdateData(data.data);
            }
            else {

            }

        }

        handleUpDates();
    }, []);

 

    return (

        <ScrollView className="h-screen flex-1 bg-black">
            <StatusBar translucent barStyle={'default'} backgroundColor={'transparent'} />

            <HomeBanner className="flex-1" data={updateData} />

            <MovieCards className="flex-1 "   data={punjabiData} title="Punjabi Movies"/>
            <MovieCards className="flex-1 " title="Hindi Movies" data={hindiData} /> 
            <MovieCards className="flex-1 " title="Hollywood Movies" data={hollywoodData} /> 
            <MovieCards className="flex-1 " title="South Indian Movies" data={southData} /> 

        </ScrollView >


    )
};


export default HomeScreen;
