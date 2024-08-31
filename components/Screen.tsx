import Colors from '@/constants/Colors';
import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface ScreenProps {
    children: ReactNode;
}

export function Screen({ children }: ScreenProps) {
    return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundWhite,
        paddingTop: 18,
        paddingLeft: 2,
        paddingRight: 2
    }
})