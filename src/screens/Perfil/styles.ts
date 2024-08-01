import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyles";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around"
    },
    name:{
        fontSize: 30,
        fontWeight: "bold"
    },
    sociais: {
        backgroundColor: colors.fourth,
        marginBottom: 20,
        flexDirection: "row",
        padding: 10,
        borderRadius: 10
    },
    sociaisText:{
        marginLeft: 5
    }
})
