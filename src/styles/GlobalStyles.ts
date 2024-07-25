import { StyleSheet } from "react-native"

export const colors = {
    primary: '#37474F',
    secondary: '#D51162',
    third: '#D9D9D9',
    black: '#000',
    white: '#FFF',
    cor_fundo: 'rgba(54,53,53,0.53)',
}

export const fonts = {
    primary: 'AlegreyaSC_400Regular'
}


export const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 50,
        fontFamily: fonts.primary,
        
        
    }

},

)