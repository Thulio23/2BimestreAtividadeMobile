import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenHome, ScreenLogin, ScreenRegister } from '../../screens'
type LoginStackParamList = {
    Home: undefined
    Login: undefined
    Register: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList, 'Home'>
export type LoginTypes = {
    navigation: LoginScreenNavigationProp
}
export function LoginNavigation() {
    const Stack = createStackNavigator<LoginStackParamList> ()
    return (
        <Stack.Navigator id='home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={ScreenHome} />
            <Stack.Screen name='Login' component={ScreenRegister} />
            <Stack.Screen name='Register' component={ScreenLogin} />

        </Stack.Navigator>
    )
}