import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View, ImageBackground } from 'react-native';

import console from '../../assets/historia/console-xbox.png';
import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import ram from '../../assets/especificacoes/ram.png';
import hdd from '../../assets/especificacoes/hdd.png';
import sales from '../../assets/jogo/sales.png';
import money from '../../assets/jogo/money.png';
import rank from '../../assets/jogo/ranking.png';
import disc from '../../assets/jogo/disc.png';

export default function Xbox() {
    return(
        <ScrollView style={css.container}>
            <Text style={css.subtitulo}>História do Xbox</Text>

            <Image source={console} style={css.imgConsole} />

            <Text style={css.texto}>A Microsoft começou sua história com o público gamer em 2001, com o lançamento do Xbox. 
                Lançado na época para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia 
                um hardware mais poderoso que o dos seus concorrentes.</Text> 
            
            <Text style={css.texto}>E para mostrar a capacidade desse novo 
                console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e 
                foi aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, 
                principalmente nos Estados Unidos.</Text>

            <Text style={css.subtitulo}>Especificações Técnicas</Text>

            <Text style={css.texto}>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
            
            <View style={css.box}>
                <View style={css.card}>
                    <Image source={cpu} style={css.imgcard} />
                    <Text style={css.textoCard}>Intel Pentium 3</Text>
                    <Text style={css.textoCard}>733 MHz</Text>
                </View>

                <View style={css.card}>
                    <Image source={gpu} style={css.imgcard} />
                    <Text style={css.textoCard}>nVidia NV2A</Text>
                    <Text style={css.textoCard}>233 MHz</Text>
                </View>

                <View style={css.card}>
                    <Image source={ram} style={css.imgcard} />
                    <Text style={css.textoCard}>64 MB DDR SDRAM</Text>
                    <Text style={css.textoCard}>200 MHz</Text>
                </View>

                <View style={css.card}>
                    <Image source={hdd} style={css.imgcard} />
                    <Text style={css.textoCard}>HD 8GB</Text>
                    <Text style={css.textoCard}>5400 RPM</Text>
                </View>
            </View>
            
            <Text style={css.subtitulo}>O fênomeno de Halo</Text>

            <Text style={css.texto}>Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox 
            no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% 
            da base de consoles Xbox.</Text>

            <Text style={css.texto}>Halo é até hoje um dos jogos mais importantes do Xbox e da indústria 
            como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.</Text>

            <View style={css.box}>
                <View style={css.card}>
                    <Image source={sales} style={css.imgcard} />
                    <Text style={css.textoCard}>4.7 milhões de cópias</Text>
                    <Text style={css.textoCard}>até julho de 2006</Text>
                </View>

                <View style={css.card}>
                    <Image source={money} style={css.imgcard} />
                    <Text style={css.textoCard}>US$ 170 milhões</Text>
                    <Text style={css.textoCard}>Apenas nos EUA</Text>
                </View>

                <View style={css.card}>
                    <Image source={rank} style={css.imgcard} />
                    <Text style={css.textoCard}>97% de Aprovação</Text>
                    <Text style={css.textoCard}>Metacritic</Text>
                </View>

                <View style={css.card}>
                    <Image source={disc} style={css.imgcard} />
                    <Text style={css.textoCard}>Remake em 2014</Text>
                    <Text style={css.textoCard}>Para o Xbox One</Text>
                </View>
            </View>

            <Text style={css.subtitulo}>Conclusão</Text>

            <Text style={css.texto}>A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo 
            que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios 
            dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores 
            mais lucrativos da industria do entretenimento.</Text>


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
        height: 210,
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
        backgroundColor: '#008001bb',
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