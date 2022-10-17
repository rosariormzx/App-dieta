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
    const [gastoEnergetico, setGastoEnergetico] = useState(0.00)
    const [actividad, setActividad] = useState(0.00)
    const [factorActividad, setFactorActividad] = useState(0.00)

    const data = [
      {value: 1.2, label: 'sedentario'},
      {value: 1.3, label: 'ligero'},
      {value: 1.5, label: 'moderado'},
      {value: 1.7, label: 'activo'},
      {value: 1.9, label: 'vigoroso'}
    ]


    function CalcularMifflin(){
      let calculo;
        let resu;
         if(genero == 'Masculino'){
            calculo = (10 * peso) + (6.25 * altura) - (5 * edad) + 5 
             resu = parseFloat(calculo).toFixed(2)
             console.log(`gastoE : ${resu}`);
            setGastoEnergetico(resu);
         }else{
             calculo = (10 * peso) + (6.25 * altura) - (5 * edad) - 161
             resu = parseFloat(calculo).toFixed(2)
             console.log(`gastoE : ${resu}`);
            setGastoEnergetico(resu);
         }
         const factor = parseFloat(resu * actividad).toFixed(2);
         setFactorActividad(factor);
         const result = parseFloat(factor).toFixed(2);
         setResultado(result);
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
    <NativeSelect
      data={data}
      value={actividad}
      placeholder="Selecciona uno"
      label="Selecciona tu factor de actividad."
      onChange={(event) => setActividad(event.currentTarget.value)}
      withAsterisk
    />
        </Group>

          <Group>
          <Button color="violet" variant="outline" onClick={CalcularMifflin}>
          Calcular  
        </Button>

          </Group>

          <Text>Gasto Energetico: {gastoEnergetico}</Text>
          <Text>Factor de Actividad: {factorActividad}</Text>
          <Text>Resultado: {resultado}</Text>


    </div>
  )
}

export default Mifflin