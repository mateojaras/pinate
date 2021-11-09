import React from 'react';
import { storiesOf } from '@storybook/react';

import Tarjeta from '../componentes/Tarjeta';

/*
export default {
    title: 'Components/Tarjeta',
    component: Tarjeta
}

export const tarjetic = () => <Tarjeta  props={{ nombre: "mateo", foto: "456" }}/>*/

storiesOf('compents',module).add('sise',()=>(<Tarjeta props={{ nombre: "mateo", foto: "456" }}/>));