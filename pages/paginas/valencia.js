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

const Valencia = () => {

    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState(0.0)
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


    function CalcularValencia(){
         if(genero == 'Masculino'){
            if(edad < 18){
                setResultado("No se puede calcular")
            }else if(edad > 18 && edad < 29){
                var calculo = (13.37 * peso) + 747
                var resu = parseFloat(calculo).toFixed(2)
                setResultado("El resultado es: "+resu)
            }else if(edad > 30 && edad < 59){
                var calculo = (13.08 * peso) + 693
                var resu = parseFloat(calculo).toFixed(2)
                setResultado("El resultado es: "+resu)
            }else if(edad > 60){
                var calculo = (14.21 * peso) + 429
                var resu = parseFloat(calculo).toFixed(2)
                setResultado("El resultado es: "+resu)
            }
            
         }else{
            if(edad < 18){
                setResultado("No se puede calcular")
            }else if(edad > 18 && edad < 29){
                var calculo = (11.02 * peso) + 679
                var resu = parseFloat(calculo).toFixed(2)
                setResultado("El resultado es: "+resu)
            }else if(edad > 30 && edad < 59){
                var calculo = (10.92 * peso) + 677
                var resu = parseFloat(calculo).toFixed(2)
                setResultado("El resultado es: "+resu)
            }else if(edad > 60){
                console.log(edad)
                console.log(peso)
                var calculo = (10.98 * peso) + 520
                var resu = parseFloat(calculo).toFixed(2)
                setResultado("El resultado es: "+resu)
            }
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
          <Button color="violet" variant="outline" onClick={CalcularValencia}>
          Calcular  
        </Button>

          </Group>

          <Text>Gasto Energetico: {gastoEnergetico}</Text>
          <Text>Factor de Actividad: {factorActividad}</Text>
          <Text>Resultado: {resultado}</Text>


    </div>
  )
}

export default Valencia