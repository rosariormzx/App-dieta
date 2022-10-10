import React from 'react'
import { useState } from 'react';
import { TextInput, Group, Button,  AppShell,
  Navbar, NativeSelect, Collapse, Divider,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments} from '@mantine/core';

const Owen = () => {

    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0.0)
    const [resultado, setResultado] = useState('')

    function CalcularOwen(){
         if(genero == 'Masculino'){
            var calculo = 879 + (10.2 * peso)
            var resu = parseFloat(calculo).toFixed(2)
            setResultado("El resultado es: "+resu)
         }else{
            var calculo = 795 + (7.18 * peso)
            var resu = parseFloat(calculo).toFixed(2)
            setResultado("El resultado es: "+resu)
         }
    }

  return (
    <div>
        <Group spacing="lg">
        <TextInput
          placeholder="Peso"
          label="Ingresar peso"
          variant="filled"
          radius="md"
          withAsterisk
          name='peso'
          id='peso'
          onChange={(event) => setPeso(event.currentTarget.value)}
          type='number'
        />


      <NativeSelect
      data={['Femenino','Masculino']}
      value={genero}
      placeholder="Selecciona uno"
      label="Selecciona el genero"
      onChange={(event) => setGenero(event.currentTarget.value)}
      withAsterisk
    />
        </Group>

          <Group>
          <Button color="violet" variant="outline" onClick={CalcularOwen}>
          Calcular  
        </Button>

          </Group>

          {resultado}


    </div>
  )
}

export default Owen