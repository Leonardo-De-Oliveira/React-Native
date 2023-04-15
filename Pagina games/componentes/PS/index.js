import React from 'react';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';

import console from '../../assets/historia/console-playstation.jpg';
import cpu from '../../assets/especificacoes/cpu.png';
import gpu from '../../assets/especificacoes/gpu.png';
import ram from '../../assets/especificacoes/ram.png';
import hdd from '../../assets/especificacoes/hdd.png';
import sales from '../../assets/jogo/sales.png';
import money from '../../assets/jogo/money.png';
import rank from '../../assets/jogo/ranking.png';
import disc from '../../assets/jogo/disc.png';

export default function PS() {
    return(
        <ScrollView style={css.container}>
            <Text style={css.subtitulo}>História do PlayStattion</Text>

            <Image source={console} style={css.imgConsole} />

            <Text style={css.texto}>A Sony iniciou sua jornada no mundo dos consoles de vídeo games em 1994, com a 
            chegada do PS1 ao Japão. A expansão não demorou e em Setembro de 1995 o aparelho chegou aos Estados Unidos. 
            Naquela época, duas outras gigantes japonesas, Sega e Nintendo, dominavam o mercado de jogos eletrônicos, 
            e ninguém esperava que um terceiro player pudesse mudar isso.</Text> 
            
            <Text style={css.texto}>Quando o PS1 foi anunciado nos Estados Unidos por U$$ 299, isso mexeu com o mercado 
            já que alguns dias antes a sega havia anunciado o Saturn por $399, o que somado com os diversos problemas 
            causados pelo lançamento as pressas do Saturn, consolidaram a posição do PlayStation no mercado de jogos.</Text>

            <Text style={css.texto}>Isso tudo foi somado com o fato do Saturn ser focado em jogos 2D, enquanto o PS1 
            chegou com a proposta de ser um console totalmente em 3D, o que o tornava ainda mais interessante, por ser 
            um console mais poderoso e mais barato que o seu concorrente.</Text>

            <Text style={css.subtitulo}>Especificações Técnicas</Text>

            <Text style={css.texto}>Confira a seguir as especificações técnicas do PlayStation, lançado em 1994</Text>
            
            <View style={css.box}>
                <View style={css.card}>
                    <Image source={cpu} style={css.imgcard} />
                    <Text style={css.textoCard}>Sony CXD8530BQ</Text>
                    <Text style={css.textoCard}>33.8688 MHz</Text>
                </View>

                <View style={css.card}>
                    <Image source={gpu} style={css.imgcard} />
                    <Text style={css.textoCard}>Sony CXD8514Q</Text>
                    <Text style={css.textoCard}>1MB VRAM</Text>
                </View>

                <View style={css.card}>
                    <Image source={ram} style={css.imgcard} />
                    <Text style={css.textoCard}>2 MB EDO DRAM</Text>
                    <Text style={css.textoCard}>33 MHz</Text>
                </View>

                <View style={css.card}>
                    <Image source={hdd} style={css.imgcard} />
                    <Text style={css.textoCard}>Drive de CD-ROM</Text>
                    <Text style={css.textoCard}>660 MB / disco</Text>
                </View>
            </View>
            
            <Text style={css.subtitulo}>Final Fantasy VII</Text>

            <Text style={css.texto}>Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido 
            pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito 
            bem recebido pelo público e pela crítica especializada.</Text>

            <Text style={css.texto}>Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque 
            semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o 
            interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas 
            a seguir: </Text>

            <View style={css.box}>
                <View style={css.card}>
                    <Image source={sales} style={css.imgcard} />
                    <Text style={css.textoCard}>2 milhões de cópias</Text>
                    <Text style={css.textoCard}>em 2 dias no Japão</Text>
                </View>

                <View style={css.card}>
                    <Image source={money} style={css.imgcard} />
                    <Text style={css.textoCard}>US$ 115 milhões</Text>
                    <Text style={css.textoCard}>Em 2 dias no Japão</Text>
                </View>

                <View style={css.card}>
                    <Image source={rank} style={css.imgcard} />
                    <Text style={css.textoCard}>92% de Aprovação</Text>
                    <Text style={css.textoCard}>Metacritic</Text>
                </View>

                <View style={css.card}>
                    <Image source={disc} style={css.imgcard} />
                    <Text style={css.textoCard}>Remake em 2020</Text>
                    <Text style={css.textoCard}>Para o PS4</Text>
                </View>
            </View>

            <Text style={css.subtitulo}>Conclusão</Text>

            <Text style={css.texto}>A Sony construiu com o PlayStation algo que para muita gente era impensável, 
            não apenas por mostrar que era possível construir um produto barato e de qualidade, mas também por ter 
            conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos 
            consumidores.</Text>


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
        backgroundColor: '#0000fc',
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