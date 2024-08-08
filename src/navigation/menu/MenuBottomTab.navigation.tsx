import { BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Slide1, Mensagem, Perfil } from '../../screens';
import { Entypo, Feather } from '@expo/vector-icons';
import { MessageNavigation } from '../message.navigation';
import { colors } from "../../styles/globalstyles"
import AntDesign from '@expo/vector-icons';

type MenuTabParam = {
    Slide1: undefined
    Mensagem: undefined
    Perfil: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Perfil">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Slide1" component={Slide1}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="slideshare" size={24} colors="black"/>
                    )
                }}
            />
            
            <Tab.Screen name="Mensagem" component={MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="message1" size={24} color={colors.white}/>
                    )
                }}
            />
       </Tab.Navigator>
    )
}