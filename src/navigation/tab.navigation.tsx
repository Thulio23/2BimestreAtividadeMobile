import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Perfil } from '../screens'
import { colors } from '../styles/colors';
import { AntDesign,FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import {MessageNavigation} from './message.navigation'

type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
        return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.secondary,
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.secondary,
                tabBarInactiveTintColor: colors.white,
            }}
        >

        <Tab.Screen name='Perfil' component = {Perfil}
            options={{
                tabBarIcon: () =>(
                    <AntDesign name="user" size={24} color={colors.white} />
                ),
            }}
        />
        <Tab.Screen name='Mensagem' component= {MessageNavigation}
            options={{
                tabBarIcon: () => (
                    <FontAwesome5 name="envelope" size={24} color={colors.white} />
                ),
            }}
        />
        </Tab.Navigator>
        )
}