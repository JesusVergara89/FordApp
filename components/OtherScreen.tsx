// screens/FeedScreen.tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '@/constants/Colors';
import Fordsvg from '@/assets/svg/Fordsvg';

const OtherScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Other screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundWhite,
    },
});

export default OtherScreen;
