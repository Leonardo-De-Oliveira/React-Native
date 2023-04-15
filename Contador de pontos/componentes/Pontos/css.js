import { StyleSheet } from "react-native";


const css = StyleSheet.create({
    rotacao: {
        transform: [
            { rotate: '180deg' }
        ]
    },
    areaPontos: {
       width: '100%',
       height: '50%',
    },
    FundoAzul: {
        backgroundColor: "#37beee",
    },
    FundoVerde: {
        backgroundColor: "#599a0f",
    },
    areaNumero: {
        display: "flex",
        alignItems: 'center',
    },
    ImagemFundo: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
    },
    textoPontos: {
        fontSize: 150,
        color: '#ffffff',
        textShadowColor: 'black',
        textShadowRadius: 5
     },
});

export default css;