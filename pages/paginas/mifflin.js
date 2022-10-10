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

const Mifflin = () => {

    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0.0)
    const [altura, setAltura] = useState(0.0)
    const [edad, setEdad] = useState(0)
    const [resultado, setResultado] = useState('')

    function CalcularMifflin(){
         if(genero == 'Masculino'){
            var calculo = (10 * peso) + (6.25 * altura) - (5 * edad) + 5 
            var resu = parseFloat(calculo).toFixed(2)
            setResultado("El resultado es: "+resu)
         }else{
            var calculo = (10 * peso) + (6.25 * altura) - (5 * edad) - 161
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

        <TextInput
          placeholder="Altura"
          label="Ingresar altura en cm"
          variant="filled"
          radius="md"
          withAsterisk
          id='altura'
          name='altura'
          onChange={(event) => setAltura(event.currentTarget.value)}
          type='number'
        />

        <TextInput
          placeholder="Edad"
          label="Ingresar edad"
          variant="filled"
          radius="md"
          withAsterisk
          id='edad'
          name='edad'
          onChange={(event) => setEdad(event.currentTarget.value)}
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
          <Button color="violet" variant="outline" onClick={CalcularMifflin}>
          Calcular  
        </Button>

          </Group>

          {resultado}


    </div>
  )
}

export default Mifflin