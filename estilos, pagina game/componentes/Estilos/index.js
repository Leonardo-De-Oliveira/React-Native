import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import churrasco from '../../assets/churrasco.png';
import convidado from '../../assets/convidado.png';
import carne from '../../assets/carne.png';
import refrigerante from '../../assets/refrigerante.png';
import cerveja from '../../assets/cerveja.png';

export default function Estilos() {
    return(
        <View style={css.container}>
            <View style={css.topo}>
                <Image source={churrasco} style={css.imgTopo} />
                <View>
                    <Text style={css.tituloTopo}>Churrasco em casa</Text>
                    <Text style={css.textoTopo}>Calculando a comida e a bebida</Text>
                </View>
            </View>

            <Text style={css.titulo}>Vai fazer um churrasco mas não sabe o que comprar?</Text>

            <Text style={css.texto}>Final de semana chegando e vem aquela vontade de fazer um churrasco. Nessa hora bate uma dúvida
                da quantidade de carne e de bebidas que cada convidado vai consumir. Veja abaixo uma média do consumo por pessoa.
            </Text>

            <View style={css.box}>
                <View style={css.card}>
                    <Image source={convidado} style={css.imgCard} />
                    <Text style={css.tituloCard}>Convidados</Text>
                    <Text style={css.textoCard}>1</Text>
                </View>

                <View style={css.card}>
                    <Image source={carne} style={css.imgCard} />
                    <Text style={css.tituloCard}>Carne</Text>
                    <Text style={css.textoCard}>400 GR</Text>
                </View>
            

            
                <View style={css.card}>
                    <Image source={refrigerante} style={css.imgCard} />
                    <Text style={css.tituloCard}>Refrigerante</Text>
                    <Text style={css.textoCard}>700 ML</Text>
                </View>
            

            
                <View style={css.card}>
                    <Image source={cerveja} style={css.imgCard} />
                    <Text style={css.tituloCard}>Cerveja</Text>
                    <Text style={css.textoCard}>4 Latas</Text>
                </View>
            </View>
            
        </View>
    );
}


const css = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    topo: {
        width: '100%',
        height: 100,
        backgroundColor: '#00a79d',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    imgTopo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
        borderColor: '#fff',
        borderWidth: 0.8,
    },
    tituloTopo: {
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    textoTopo: {
        color: '#fff',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20,
        textAlign: 'center',
    },
    texto: {
        marginHorizontal: 20,
        textAlign: 'center',
    },
    box: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: '#ddf2ed',
        width: 170,
        height: 110,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    imgCard: {
        width: 40,
        height: 40,
    },
    tituloCard: {
        color: '#00a79d',
        marginBottom: 5,
    },
    textoCard: {
        color: '#00a79d',
        fontWeight: 'bold',
        fontSize: 20,
    },
});