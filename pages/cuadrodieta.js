import React from 'react'
import {Autocomplete,Title, Table ,MultiSelect, TabProps, TextInput, Group, Button,  AppShell, Navbar, Header, Footer, Aside,Text, MediaQuery, Burger, Stack, UnstyledButton, Avatar,
    useMantineTheme, ScrollArea, ActionIcon, IconAdjustments} from '@mantine/core';
  import { Image } from '@mantine/core';
  import Menu from '../components/Menu';
 

  
const Cuadrodieta = () => {
  const elements =  
  [
    { position: 'Proteinas', mass: 1, symbol: 'C', name: 'Carbon' },
    { position: 'Lipidos', mass: 14.007, symbol: 'N', name: 'Nitrogen' },
    { position: 'Carbohidratos', mass: 88.906, symbol: 'Y', name: 'Yttrium' },
    { position: 'Total', mass: 137.33, symbol: 'Ba', name: 'Barium' },
  
  ];

  const data = [
    { value: 'porc', label: 'Porcentaje' },
    { value: 'grakca', label: 'Gramos / Kcal' },
    
  ];
  <br></br>
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <div>cuadrodieta

<AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Menu></Menu>
      }
    >
      <Title order={1}>Cuadro Dietosintetico.</Title>
      <br></br>

      <MultiSelect
      data={data}
      label="Ingrese opcion a calcular:"
      placeholder="Seleccione opción. "
    />

      <Table withColumnBorders>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Porcentaje /</th>
          <th>Kcal </th>
          <th>Gramos</th>
          <th>g / kcal</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>

    


    </AppShell>


    </div>
  )
}

export default Cuadrodieta