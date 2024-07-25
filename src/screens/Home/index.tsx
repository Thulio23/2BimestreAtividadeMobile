import { ImageBackground, View, Image, Text } from "react-native";
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./steles"

export function Slide01() {
    const slide = require('../../assets/Tela_de_Fundo.png')
    const home = require('../../assets/home01.png')
    return(
    <>
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.fundo}>

            <View style={styles.centralizar}>
                <Image source={home} style={styles.img}></Image >
                <Text style={styleContainer.text}>HOME</Text>
            </View>

                
            </View>
        </ImageBackground>
    </>
    )

}