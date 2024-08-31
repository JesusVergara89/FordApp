import Cars from '@/components/Car';
import Colors from '@/constants/Colors';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import axios from 'axios'

const Page = () => {

    const [cars, setCars] = useState<any[]>([]);

    useEffect(() => {
      const URL = 'https://car-api-co78.onrender.com/api/cars/';
      
      axios.get(URL)
        .then(({data}) => {
          setCars(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error); 
        });
    }, []);

    return (
            <View style={styles.container} >
                 <Cars cars={cars} />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.backgroundWhite,
    }
})

export default Page;
