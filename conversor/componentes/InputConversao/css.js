import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    boxGeral: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxConversor: {
        width: 320,
        height: 140,
        borderRadius: 10,
        backgroundColor: '#ffffff66',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontWeight: '400',
        color: '#fff',
        marginBottom: 20,
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8fed90',
        width: 100,
        height: 40,
        borderRadius: 10,
    },
    boxBotao: {
        flexDirection: 'row',
    },
    areaNumero: {
        borderRadius: 10,
        marginLeft: 20,
        width: 160,
        backgroundColor: '#fff',
    },
});

export default css;