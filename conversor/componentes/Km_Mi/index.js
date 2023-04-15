import React, {useState} from "react";
import { ImageBackground, View, Text } from 'react-native';
import css from './css';

import fundo from '../../assets/fundo1.jpg';

import InputConversao from '../InputConversao';
import ResultadoConversao from "../ResultadoConversao";

export default function Milhas() {

    const [ milhas, setMilhas ] = useState(0);

    function converteKmParaMI(quilometros) {
        const valorConvertido = quilometros/1.60
        setMilhas(valorConvertido.toFixed(2));
    }


    return(
        <ImageBackground style={css.container} source={fundo} blurRadius={120}>
            <View style={css.boxGeral}>
                <InputConversao 
                titulo="Conversor de Quilômetros para Milhas" 
                contador="Quilômetros" 
                funcaoTextoAlterado={valorInput => converteKmParaMI(valorInput)} />

                <ResultadoConversao 
                texto="Milhas" 
                resultado={milhas} />
            </View>    
        </ImageBackground>
    );
}