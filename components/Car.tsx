import { FlatList, Image, StyleSheet, View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

interface carsProp {
    id: string
    model: string
    engine: string
    descriptio: string
    price: string
    price_1: string
    image_url: Array<string>
    colors: Array<string>
    versions: Array<string>
}

const Cars = ({ cars }: { cars: carsProp[] }) => {

    

    const renderItem = ({ item }: { item: carsProp }) => {
        
        const priceSplit = item.price.split('.')
        const priceSplit1 = priceSplit[0].split('')
        let price = ''
        if(priceSplit1.length > 6){
            priceSplit1.splice(1, 0, ',')
            priceSplit1.splice(5, 0, ',')
            price = priceSplit1.join('')
        }else{
            priceSplit1.splice(3, 0, ',')
            price = priceSplit1.join('')
        }

        return (
            <View style={styles.card}>
                <Image source={{ uri: item.image_url[0] }} style={styles.image} />
                <Text style={styles.model}>{item.model}</Text>
                <Text style={styles.price}>Price starting from: ${price}</Text>
                <Link asChild href={`/${item.id}`} >
                    <Pressable style={styles.pressable} onPress={() => { }} >
                        <Text style={styles.pressableText} >Get to know it</Text>
                    </Pressable>
                </Link>
            </View>
        )
    }

    return (
        <View  style={[{ paddingVertical: 20 }, styles.container]}>
            <FlatList
                data={cars}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 60 }}></View>}
                ListFooterComponent={<View style={styles.endlist}><Text></Text></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        width: 350,
        paddingVertical: 15,
    },
    image: {
        width: "100%",
        height: 160,
        objectFit: "cover"
    },
    model: {
        fontSize: 17,
        fontWeight: "700",
        color: Colors.fordClear,
        marginTop: 15,
    },
    price: {
        fontSize: 14,
        fontWeight: "400",
        color: Colors.blueDark,
        marginTop: 5,
    },
    pressable: {
        width: "100%",
        backgroundColor: Colors.fordClear,
        paddingVertical: 15,
        marginTop: 10
    },
    pressableText: {
        fontSize: 18,
        color: Colors.backgroundWhite,
        textAlign: "center",
        letterSpacing: 1
    },
    endlist: {
        height: 150
    },
})

export default Cars

