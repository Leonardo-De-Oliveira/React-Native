import React from 'react';
import { View } from 'react-native';

import Pontos from './componentes/Pontos';
import azul from './assets/blue.jpg';
import verde from './assets/green.jpg';

export default function App(){
    return(
        <View>  
            <Pontos Fundo={azul} rotacao={180} cor='azul' />
            <Pontos Fundo={verde} rotacao={0} cor='verde' />
        </View>
    );
}

