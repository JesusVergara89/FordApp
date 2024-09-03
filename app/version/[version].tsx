import { ActivityIndicator, Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Screen } from '@/components/Screen'
import { Stack, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import Colors from '@/constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

interface carsProp {
    id: string
    model: string
    engine: string
    description: string
    price: string
    price_1: string
    image_url: Array<string>
    colors: Array<string>
    versions: Array<string>
    show_image: string
    comparations: [{ version: string, image: string, price: string }]
}

const { width } = Dimensions.get("window")
const height = 700

export default function Detail() {

    const { version } = useLocalSearchParams();

    const [car, setCar] = useState<carsProp | null>(null);

    const { id } = useLocalSearchParams();

    useEffect(() => {
        const URL = `https://car-api-co78.onrender.com/api/cars/${version}`
        axios.get(URL)
            .then(({ data }) => setCar(data))
            .catch(e => console.log(e))
    }, [id])

    const setNewPrice = (price: string) => {
        const priceSplit = price.split('')
        let price_ = ''
        if (priceSplit.length > 6) {
            priceSplit.splice(1, 0, ',')
            priceSplit.splice(5, 0, ',')
            price_ = priceSplit.join('')
        } else {
            priceSplit.splice(3, 0, ',')
            price_ = priceSplit.join('')
        }
        return price_
    }

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View>
                <Image style={styles.showImage} source={{ uri: car?.show_image }} />
                <View style={styles.gradient} />
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
                    {car?.comparations.map((version, index) => (
                        <View style={styles.containerImage} key={index} >
                            <View style={styles.version} >
                                <Text style={styles.versionText} >{version.version}</Text>
                            </View>
                            <Image style={styles.image} source={{ uri: version.image }} />
                            <View style={styles.price} >
                                <Text style={styles.priceStarting} >Price starting from: <Text style={styles.priceText} >${setNewPrice(version.price)}</Text></Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <Text style={styles.model} >{car?.model}</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    model: {
        position: "absolute",
        bottom: -90,
        left: 15,
        fontSize: 30,
        color: Colors.ford,
        fontWeight: "700",
    },
    showImage: {
        position: "absolute",
        top: -190,
        width: width,
        height: height,
        left: -2
    },
    gradient: {
        position: 'absolute',
        top: -150,
        left: 0,
        right: 0,
        height: 250,
        width: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    containerNames: {
        position: "absolute",
        top: 360,
    },
    container: {
        position: "absolute",
        top: 550,
    },
    version: {
        position: "absolute",
        bottom: 210,
        width: 250,
    },
    versionText: {
        color: Colors.blueDark,
        fontSize: 21,
        fontWeight: "600",
        margin: "auto"
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: "contain"
    },
    containerImage: {
        width: 250,
        height: 250,
        marginRight: 40,
        marginLeft: 10
    },
    price: {
        position: "absolute",
        bottom: 10,
    },
    priceStarting: {
        fontSize: 17,
        textAlign: "center",
    },
    priceText: {
        fontSize: 17,
        fontWeight: "600",
        textAlign: "center",
    }
})
