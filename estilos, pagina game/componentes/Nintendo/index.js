import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';

import console from '../../assets/historia/console-nintendo.jpg';
import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import ram from '../../assets/especificacoes/ram.png';
import hdd from '../../assets/especificacoes/hdd.png';
import sales from '../../assets/jogo/sales.png';
import money from '../../assets/jogo/money.png';
import rank from '../../assets/jogo/ranking.png';
import disc from '../../assets/jogo/disc.png';

export default function Nintendo() {
    return(
        <ScrollView style={css.container}>
            <Text style={css.subtitulo}>História do Nintendo Entertainment System</Text>

            <Image source={console} style={css.imgConsole} />

            <Text style={css.texto}>Um dos consoles mais emblemáticos da Nintendo até hoje foi lançado em 1983 
            no Japão com o nome de Famicom (Family Computer), mas só em 1985 o console chegou aos Estados Unidos, 
            com um visual totalmente reformulado e um novo nome, Nintendo Entertainment System (NES).</Text> 
            
            <Text style={css.texto}>O NES ajudou a revitalizar a indústria de vídeo games após a quebra da mesma 
            devido a uma saturação de mercado com diversos consoles de baixa qualidade disponíveis. A nintendo 
            mirou e acertou em cheio, trazendo com o NES um console barato, simples e de alta qualidade para as 
            mãos dos consumidores.</Text>

            <Text style={css.texto}>O console foi lançado no dia 15 de Julho de 1983 no japão, juntamente com os 
            jogos Donkey Kong, Donkey Kong Jr. e Popey, todos feitos pela Nintendo para arcade. Ao final de 1984 
            o Famicom já era console mais vendido do país. O console chegou em Nova York, nos Estados Unidos, em 
            1985 mas o lançamento a nível nacional só ocorreu em Fevereiro de 1986, contando com 17 jogos 
            disponíveis no lançamento.</Text>

            <Text style={css.subtitulo}>Especificações Técnicas</Text>

            <Text style={css.texto}>Confira a seguir as especificações técnicas do NES, lançado em 1983</Text>
            
            <View style={css.box}>
                <View style={css.card}>
                    <Image source={cpu} style={css.imgcard} />
                    <Text style={css.textoCard}>Ricoh 2A03</Text>
                    <Text style={css.textoCard}>Processador 8-bit</Text>
                </View>

                <View style={css.card}>
                    <Image source={gpu} style={css.imgcard} />
                    <Text style={css.textoCard}>52 Cores</Text>
                    <Text style={css.textoCard}>256 x 240</Text>
                </View>

                <View style={css.card}>
                    <Image source={ram} style={css.imgcard} />
                    <Text style={css.textoCard}>2KB RAM</Text>
                    <Text style={css.textoCard}>Memória</Text>
                </View>

                <View style={css.card}>
                    <Image source={hdd} style={css.imgcard} />
                    <Text style={css.textoCard}>Cartucho</Text>
                    <Text style={css.textoCard}>Proprietário</Text>
                </View>
            </View>
            
            <Text style={css.subtitulo}>Super Mario bros</Text>

            <Text style={css.texto}>Apesar de não estar disponível no lançamento do console, Super Mario Bros 
            foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.</Text>

            <Text style={css.texto}>A franquia foi tão popular na época, que 3 jogos da série Super Mario 
            ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 
            em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da 
            franquia Super Mario Bros:</Text>

            <View style={css.box}>
                <View style={css.card}>
                    <Image source={sales} style={css.imgcard} />
                    <Text style={css.textoCard}>40 milhões de cópias</Text>
                    <Text style={css.textoCard}>Até 1994</Text>
                </View>

                <View style={css.card}>
                    <Image source={money} style={css.imgcard} />
                    <Text style={css.textoCard}>US$ 72 milhões</Text>
                    <Text style={css.textoCard}>Primeiros 4 meses</Text>
                </View>

                <View style={css.card}>
                    <Image source={rank} style={css.imgcard} />
                    <Text style={css.textoCard}>95% de Aprovação</Text>
                    <Text style={css.textoCard}>Revista CVG</Text>
                </View>

                <View style={css.card}>
                    <Image source={disc} style={css.imgcard} />
                    <Text style={css.textoCard}>Remake em 1993</Text>
                    <Text style={css.textoCard}>Para o SNES</Text>
                </View>
            </View>

            <Text style={css.subtitulo}>Conclusão</Text>

            <Text style={css.texto}>A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos 
            e até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, 
            Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise 
            dos vídeo games de 1983 e transformar o que parecia ser o fim da indústria em um recomeço extremamente 
            lucrativo.</Text>


        </ScrollView>
    );
}

const css = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        
    },
    imgConsole: {
        width: '100%',
        height: 230,
    },
    subtitulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 18,
    },
    texto: {
        color: '#808080',
        marginBottom: 30, 
        marginTop: 20,       
    },
    box: {
        marginVertical: 20,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    card: {
        backgroundColor: '#fe0000',
        width: 150,
        height: 130,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 10,
    },
    imgcard: {
        width: 60,
        height: 60,
        marginBottom: 5,
        tintColor: 'white',        
    },
    textoCard: {
        color: '#fff',
        fontSize: 12,
    },
});