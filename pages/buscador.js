import React from 'react'
import { useState } from 'react';
import {
  Autocomplete, Title, TextInput, Group, Button, AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments, Card
} from '@mantine/core';
import { Image } from '@mantine/core';
import Menu from '../components/Menu';

// Conexion al firebase, al archivo .json
export const getStaticProps = async (context) => {
  const res = await fetch('https://smaedb-f4e58-default-rtdb.firebaseio.com/SMAE.json')
  const data = await res.json()

  return {
    props: {
      post: data
    }
  }

}

const buscador = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
// 
  async function search() {
    setList(await searchFood(value));
  }
// Busqueda comida 
  const searchFood = async (searchWord) => {
// Archivo json 
    const res = await fetch('https://smaedb-f4e58-default-rtdb.firebaseio.com/SMAE.json');
    let data = await res.json();
// Si esta vacio el input manda toda la lista del json
    if (searchWord == '') return data;
//filtra las palabras
    return data.filter(element => element.Alimento.toLowerCase().includes(searchWord.toLowerCase()));
  }

  return (
    <div>buscador

      <AppShell
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Menu></Menu>
        }
      >

        <Title order={1}>Buscador de alimentos.</Title>
        <br></br>
{/* Aqui s eingresa la palabra a buscar  */}
        <Autocomplete
          label="Ingrese alimento a buscar:"
          placeholder="Buscar"
          data={[]}
          value={value}
          // Esto debe de ir aqui, es parte del componente y si no no funciona.Aqui esta vacio. 
          onChange={setValue}
        />
        <br></br>
        {/* Se le da la accion al boton cuando se da clic */}
        <Button onClick={search} color="grape" radius="md" size="md">
          Buscar
        </Button>
        <br></br>

        {list.map((alimento, indice) => {
          return (
      // Card es donde aparecera las palabras, parte de diseño 
            <Card key={indice} shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section withBorder inheritPadding py="xs">
                <Text> {alimento.Alimento} </Text>
                {/*  <Text> {alimento.Cantidad}</Text> */}
               {/*  <Text> {alimento.Fibra}</Text> */}
               
              </Card.Section>
            </Card>
          )
        })}



      </AppShell>
    </div>
  )
}

export default buscador