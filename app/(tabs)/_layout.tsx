import Colors from '@/constants/Colors';
import { HomeIcon, IndustryIcon, ModelsIcon } from '@/constants/Icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.ford,
          position: "absolute",
          bottom: 30,
          justifyContent: "space-between",
          alignSelf: "center",
          height: 60,
          marginHorizontal: 40,
          paddingHorizontal: 10,
          paddingVertical: 8,
          paddingBottom: 8,
          borderRadius: 16,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: Colors.fordClear,
          borderTopColor: Colors.fordClear,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.backgroundWhite,
        tabBarActiveTintColor: Colors.fordClear,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View >
              <HomeIcon size={25} color={color} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="ford"
        options={{
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <ModelsIcon size={25} color={color} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="models"
        options={{
          title: "",
          tabBarIcon: ({ color, size, focused }) => (
            <View>
              <IndustryIcon size={25} color={color} />
            </View>
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({})
