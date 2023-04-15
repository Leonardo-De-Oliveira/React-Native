import React, { useState } from "react";
import css from './css';
import { ImageBackground, View, Text } from "react-native";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


export default function Pontos (props) {
    
    const [ pontos, setPontos ] = useState(20);

    const soma = () => {
        let somatoria = pontos;
        somatoria++;
        setPontos(somatoria);
    }

    const subtracao = () => {
        let menos = pontos;
        menos--;
        setPontos(menos);
    }

    const resetaPontos = () => {
        setPontos(20);
    }
    
    const rotacao = (props.rotacao === 180) ? css.rotacao : ' ';
    const corDeFundo = (props.cor === 'azul') ? css.FundoAzul : css.FundoVerde;

    return(
        <View style={[css.areaPontos, rotacao, corDeFundo]}>
            
            <ImageBackground blurRadius={60} source={props.Fundo} style={css.ImagemFundo}>

                <AntDesign onPress={subtracao} name="minuscircleo" size={40} color="white" />
                     
                <View style={css.areaNumero}>
                    
                    <Text style={css.textoPontos}>{pontos}</Text>

                    <MaterialCommunityIcons onPress={resetaPontos} name="restore" size={36} color="white" />

                </View> 

                <AntDesign onPress={soma} name="pluscircleo" size={40} color="white" />

            </ImageBackground>

        </View>
    );
}