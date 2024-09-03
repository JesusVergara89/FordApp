import { ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, version } from 'react'
import { Screen } from '@/components/Screen'
import { Link, Stack, useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import Colors from '@/constants/Colors';

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
    comparations: Array<object>
}

export default function Detail() {

    const [car, setCar] = useState<carsProp | null>(null);
    const [imageurl, setImageurl] = useState<string>('')

    const { id } = useLocalSearchParams();

    useEffect(() => {
        const URL = `https://car-api-co78.onrender.com/api/cars/${id}`
        axios.get(URL)
            .then(({ data }) => setCar(data))
            .catch(e => console.log(e))
    }, [id])

    const changeColorCar = (index: number) => {
        if (car?.image_url) {
            setImageurl(car.image_url[index])
        }
    }

    return (
        <Screen >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />
            <View style={styles.container}>
                {car === null ? (
                    <ActivityIndicator style={styles.loader} color={Colors.blueDark} size={"large"} />
                ) : (
                    <SafeAreaView style={styles.safeArea}>
                        <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
                            <View style={styles.card}>
                                <Image style={styles.mainImage} source={{ uri: imageurl === '' ? car.image_url[0] : imageurl }} />
                                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.colorsContent} >
                                    {car.colors.map((color, index) => (
                                        <Pressable onPress={() => { changeColorCar(index) }} key={index} style={[styles.colorPressable, { backgroundColor: color }]} ><Text></Text></Pressable>
                                    ))}
                                </ScrollView>
                                <Text style={styles.model} >{car.model}</Text>
                                <Text style={styles.engine} >{`Engine: \n\n${car.engine}`}</Text>
                                <Text style={styles.titleDescription} >{car.model}</Text>
                                <Text style={styles.description} >{car.description}</Text>
                                <Text style={styles.versions1} >Versions</Text>
                                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.versionContent} >
                                    {car.versions.map((version, index) => (
                                        <View key={index} style={styles.containerVersiion}>
                                            <Text style={styles.textVersions}>{version}</Text>
                                        </View>
                                    ))}
                                </ScrollView>
                                <Link asChild href={`/version/${car.id}`}>
                                    <Text style={styles.versions2} >Compare versions</Text>
                                </Link>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                )}
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    safeArea: {
        flex: 1,
    },
    card: {
        flex: 1
    },
    loader: {
        alignSelf: "center"
    },
    mainImage: {
        width: "150%",
        height: 390,
    },
    model: {
        fontSize: 23,
        marginLeft: 10,
        fontWeight: "700",
        letterSpacing: 0.5,
        color: Colors.fordClear,
        marginTop: 15,
    },
    engine: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "200",
        letterSpacing: 0.5,
        color: Colors.blueDark,
        marginTop: 20,
        textAlign: "justify",
        paddingRight: 30,
    },
    colorsContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 15,
        marginTop: 10,
        marginBottom: 10,
        margin: "auto"
    },
    colorPressable: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    titleDescription: {
        marginTop: 25,
        textAlign: "center",
        fontSize: 28,
        fontWeight: "200",
        color: Colors.blueDark,
    },
    description: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: "200",
        letterSpacing: 0.5,
        color: Colors.blueDark,
        marginTop: 20,
        textAlign: "left",
        paddingRight: 30,
    },
    versions1: {
        marginTop: 25,
        textAlign: "center",
        fontSize: 28,
        fontWeight: "200",
        color: Colors.blueDark,
        marginVertical: 15,
        padding: 20,
    },
    versions2: {
        marginTop: 25,
        textAlign: "center",
        fontSize: 28,
        fontWeight: "200",
        color: Colors.blueDark,
        marginVertical: 15,
        padding: 20,
        borderWidth: 1,
        width: 370,
        borderColor: Colors.fordClear,
        margin: "auto",
        marginBottom: 100,
    },
    versionContent: {
        justifyContent: "center",
        alignItems: "center",
        columnGap: 15,
        marginTop: 10,
        //marginBottom: 100,
        margin: "auto",
        rowGap: 15,
    },
    containerVersiion: {
        padding: 20,
        borderWidth: 1,
        width: 370,
        borderColor: Colors.fordClear,
        backgroundColor: Colors.fordClear,
    },
    textVersions: {
        textAlign: "center",
        fontSize: 22,
        color: Colors.backgroundWhite,
        fontWeight: "300",
        letterSpacing: 1
    }
})
