import React from "react";
import { View, Text, TextInput } from 'react-native';
import css from './css';


export default function Milhas(props) {


    return(
        <View style={css.boxGeral}>
                <View style={css.boxConversor}>
                    <Text style={css.titulo}>{props.titulo}</Text>

                    <View style={css.boxBotao}>
                        <View style={css.botao}>
                            <Text>{props.contador}</Text>
                        </View>
                        <TextInput 
                        style={css.areaNumero}
                        keyboardType="number-pad"
                        defaultValue="0"
                        textAlign="center"
                        onChangeText={props.funcaoTextoAlterado} />
                    </View>
                </View>
        </View>    
    );
}