import { storiesOf } from '@storybook/react'
import React from 'react'
import Tato from '../componentes/Tato'


export default{
    title:'hola mundo',
    component:Tato,
}
storiesOf('jaja',module).add('nombre',()=><Tato props={{name:"hola mundo"}}/>)
