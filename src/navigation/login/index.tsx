import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { LoginNavigation } from "./login.navigation";
import { Loading } from "../../components/Loading"
import { useAuth } from "../../hook/auth";
import { MenuTabs } from "../menu/MenuBottomTab.navigation";
import { Home } from "../../screens"

export function Navigation() {
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading/>
    }
    return (
        <NavigationContainer>
            {user?.token ? <MenuTabs/> : <LoginNavigation />}
        </NavigationContainer>
    )
}

