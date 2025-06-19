import { COLORS } from '@constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: { 
            backgroundColor: "black", 
            height: 40, 
            position: 'absolute',
            elevation: 0,
            paddingBottom: 8,
        }
    }}>
        <Tabs.Screen name="index" 
        options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => (
                <Ionicons name="home" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen name="bookmarks" options={{
            title: 'Bookmarks',
            tabBarIcon: ({ size, color }) => (
                <Ionicons name="bookmark" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen name="create" options={{
            title: 'Create',
            tabBarIcon: ({ size, color }) => (
                <Ionicons name="add" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen name="notifications" options={{
            title: 'Notifications',
            tabBarIcon: ({ size, color }) => (
                <Ionicons name="notifications" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen name="profile" options={{
            title: 'Profile',
            tabBarIcon: ({ size, color }) => (
                <Ionicons name="person-circle" color={color} size={size} />
            ),
        }} />
    </Tabs>
  )
}