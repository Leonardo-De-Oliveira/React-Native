import React from "react";
import { View, Text } from 'react-native';
import css from './css';

export default function ResultadoConversao(props) {

    

    return(
            <View style={css.boxGeral}>

                <View style={css.boxResultado}>
                    <Text style={css.resultado}>{props.resultado}</Text>
                    <Text style={css.textoResultado}>{props.texto}</Text>
                </View>
            </View>    
        
    );
}