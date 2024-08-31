import Fordsvg from '@/assets/svg/Fordsvg';
import Colors from '@/constants/Colors';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
    return (
        <SafeAreaView style={styles.safeAreaStyle} >
            <View style={styles.container}>
                <Fordsvg width={120} height={120} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
    },
    container: {
        flexDirection: "row",
        justifyContent: "center",
        height: 70,
        alignItems: "center",
        paddingHorizontal: 20,
    },
})

export default Header;
