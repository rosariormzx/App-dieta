import React from 'react'
import {Autocomplete,Title, Table ,MultiSelect, TabProps, TextInput, Group, Button,  AppShell, Navbar, Header, Footer, Aside,Text, MediaQuery, Burger, Stack, UnstyledButton, Avatar,
    useMantineTheme, ScrollArea, ActionIcon, IconAdjustments} from '@mantine/core';
  import { Image } from '@mantine/core';
  import Menu from '../components/Menu';
 

  
const Cuadrodieta = (props) => {

  const dameElemento = (name, porcentaje, equivalente) => {
    const kcalorias = parseFloat(props.kcal/100 * porcentaje).toFixed(2);
    const gramos = parseFloat(kcalorias) / parseFloat(equivalente);
    const grkg = gramos / props.peso;


    return {
      description: name,
      porcentaje: porcentaje,
      kcal: kcalorias,
      gramos: gramos.toFixed(2),
      grkcal: grkg.toFixed(2)
    }
  }
  
  let elements =  
  [
    dameElemento('Proteinas', 20, 4),
    dameElemento('Lipidos',30, 9),
    dameElemento('Carbohidratos',50,4),
    { description: 'Total', porcentaje: 100, kcal: props.kcal.toFixed(2), gramos: 'pendiente' , grkcal: 'pendiente'},
  ];

  const data = [
    { value: 'porc', label: 'Porcentaje' },
    { value: 'grakca', label: 'Gramos / Kcal' },
    
  ];
  <br></br>
  const rows = elements.map((element) => (
    <tr key={element.description}>
      <td>{element.description}</td>
      <td>{element.porcentaje}%</td>
      <td>{element.kcal} kcal</td>
      <td>{element.gramos} gr</td>
      <td>{element.grkcal} gr/k</td>
    </tr>
  ));

  return (
    <div>

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
          <th>Descripcion</th>
          <th>Porcentaje </th>
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