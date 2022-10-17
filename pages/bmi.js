import React from 'react'
import { useState } from 'react';
import {
  TextInput, Group, Button, AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments
} from '@mantine/core';
import Menu from '../components/Menu';
import Layout from '../components/Layout';



const Bmi = () => {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [bmi, setBmi] = useState('')


  function Calcular(){
    var calculo = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))
    var imc = parseFloat(calculo).toFixed(2)
    if(imc < 18.5){
      setBmi("Tu BMI es de: "+imc+' Bajo peso')
    }else if(imc > 18.5 && imc < 24.9){
      setBmi("Tu BMI es de: "+imc+' Normal')
    }else if(imc > 24.9 && imc < 29.9 ){
      setBmi("Tu BMI es de: "+imc+' Sobrepeso')
    }else if(imc > 29.9){
      setBmi("Tu BMI es de: "+imc+' Obesidad')
    }
  }

  
  return (
     < Layout isPrivate = {true} >
      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Menu></Menu>
        }
      >
        <Text>Desde BMI</Text>
        <Group spacing="lg">
        <TextInput
          placeholder="Peso"
          label="Ingresar peso"
          variant="filled"
          radius="md"
          withAsterisk
          name='peso'
          id='peso'
          type='number'
          onChange={(event) => setPeso(event.currentTarget.value)}
        />

        <TextInput
          placeholder="Altura"
          label="Ingresar altura"
          variant="filled"
          radius="md"
          withAsterisk
          id='altura'
          name='altura'
          type='number'
          onChange={(event) => setAltura(event.currentTarget.value)}
        />
        </Group>

        <Button color="violet" variant="outline" onClick={Calcular}>
          Calcular
        </Button>
          {bmi}

      </AppShell>
    </Layout>
  )
}



export default Bmi