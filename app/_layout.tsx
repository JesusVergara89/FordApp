import Colors from '@/constants/Colors';
import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import 'react-native-reanimated';
import fordImage from '@/assets/images/fordImg.png'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.backgroundWhite },
          headerTitle: () => (
            <View style={styles.logoFord} >
              <Image source={fordImage} style={styles.imageFord} />
            </View>
          ),
          headerLeft: () => null,
          headerRight: () => null,
          headerShadowVisible: false,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoFord: {
    position: "absolute",
    bottom: -55,
  },
  imageFord: {
      width: 110,
      objectFit: "contain"
  }
});
