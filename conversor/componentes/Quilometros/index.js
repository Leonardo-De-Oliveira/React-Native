import React, {useState} from "react";
import { ImageBackground, View } from 'react-native';
import css from './css';

import fundo from '../../assets/fundo2.jpeg';

import InputConversao from '../InputConversao';
import ResultadoConversao from "../ResultadoConversao";

export default function Milhas() {

    const [ quilometros, setQuilometros ] = useState(0);

    function converteMIParaKM(quilometros) {
        const valorConvertido = quilometros * 1.60
        setQuilometros(valorConvertido.toFixed(2));
    }


    return(
        <ImageBackground style={css.container} source={fundo} blurRadius={120}>
            <View style={css.boxGeral}>
                <InputConversao 
                titulo="Conversor de Milhas para Quilômetros" 
                contador="Milhas" 
                funcaoTextoAlterado={valorInput => converteMIParaKM(valorInput)}
                 />

                <ResultadoConversao 
                texto="Quilômetros"
                resultado={quilometros} />
            </View>    
        </ImageBackground>
    );
}