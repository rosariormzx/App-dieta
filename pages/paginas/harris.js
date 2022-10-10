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

const Harris = () => {

    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0.0)
    const [altura, setAltura] = useState(0.0)
    const [edad, setEdad] = useState(0)
    const [resultado, setResultado] = useState('')
    const [gastoEnergetico, setGastoEnergetico] = useState(0.00)
    const [actividad, setActividad] = useState(0.00)
    const [factorActividad, setFactorActividad] = useState(0.00)
    const [termogenesis, setTermogenesis] = useState(0.0)
    
    const data = [
      {value: 1.2, label: 'sedentario'},
      {value: 1.3, label: 'ligero'},
      {value: 1.5, label: 'moderado'},
      {value: 1.7, label: 'activo'},
      {value: 1.9, label: 'vigoroso'}
    ]
    function CalcularHarris(){
      // Gasto energetico Basal (GEB), solo la formula, para caso masculino
        let calculo;
        let resu; 
        if(genero == 'Masculino'){
          // GEB
            calculo = 66.5+(13.75 * peso) + (5 * altura) - (6.78 * edad)
            resu = parseFloat(calculo).toFixed(2)
            console.log(`gastoE : ${resu}`);
            setGastoEnergetico(resu);
            
         }else{
          // Para caso femenino (GEB)
            calculo = 655.1 + (9.56 * peso) + (1.85 * altura) - (4.68 * edad)
            resu = parseFloat(calculo).toFixed(2)
            console.log(`gastoE : ${resu}`);
            setGastoEnergetico(resu);
          }
          
          const factor = parseFloat(resu * actividad).toFixed(2);
          setFactorActividad(factor);
          const term = parseFloat(factor * 0.10).toFixed(2);
          setTermogenesis(term);
          const result = parseFloat(factor) + parseFloat(term);
          console.log(`result : ${result} de ${factor} + ${term}  test ${factor + term}`);
          setResultado(realizarFormato(result));
    }

    function realizarFormato(num) {
      return parseFloat(num).toFixed(2);
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
          <Button color="violet" variant="outline" onClick={CalcularHarris}>
          Calcular  
        </Button>

          </Group>

          <Text>Gasto Energetico: {gastoEnergetico}</Text>
          <Text>Factor de Actividad: {factorActividad}</Text>
          <Text>Termogenesis: {termogenesis}</Text>
          <Text>Resultado: {resultado}</Text>

    </div>
  )
}

export default Harris