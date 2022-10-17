import React from 'react'
import { useState } from 'react';
import {
  Autocomplete, Title, Table, MultiSelect, TabProps, TextInput, Group, Button, AppShell, Navbar, Header, Footer, Aside, Text, MediaQuery, Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments, Input
} from '@mantine/core';
import { Image } from '@mantine/core';
import Menu from '../components/Menu';
import Layout from '../components/Layout';



const Cuadrodieta = (props) => {

  const [porcentajes, setPorcentajes] = useState({
    'Proteinas': 0,
    'Lipidos': 0,
    'Carbohidratos': 0,
    'Total': 0
  })

  const dameElemento = (name, porcentaje, equivalente) => {
    const kcalorias = parseFloat(props.kcal / 100 * porcentaje).toFixed(2);
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

  function handlePorcentaje(e) {
    let porcentaje = { ...porcentajes };
    porcentaje[e.target.name] = e.target.value;

    if (porcentaje.Carbohidratos >= 0 
      && porcentaje.Lipidos >= 0 
      && porcentaje.Proteinas >= 0) 
     porcentaje['Total'] = calcularTotal(porcentaje);

    setPorcentajes(porcentaje);


  }

  function calcularTotal(porcentaje) {
    return parseInt(porcentaje.Carbohidrato) + parseInt(porcentaje.Lipidos) + parseInt(porcentaje.Proteinas);
  }


  let elements =
    [
      dameElemento('Proteinas', porcentajes.Proteinas, 4),
      dameElemento('Lipidos', porcentajes.Lipidos, 9),
      dameElemento('Carbohidratos', porcentajes.Carbohidratos, 4),
      { description: 'Total', porcentaje: 100, kcal: props?.kcal?.toFixed(2), gramos: 'pendiente', grkcal: 'pendiente' },
    ];

  const data = [
    { value: 'porc', label: 'Porcentaje' },
    { value: 'grakca', label: 'Gramos / Kcal' },

  ];
  <br></br>
  const rows = elements.map((element) => (
    <tr key={element.description}>
      <td>{element.description}</td>
      <td>{props.activador == 0 ? <Input
        name={element.description}
        placeholder='Porcentaje'
        value={porcentajes[element.description]}
        onChange={(event) => handlePorcentaje(event)} />
        : element.porcentaje}%</td>
      <td>{element.kcal} kcal</td>
      <td>{element.gramos} gr</td>
      <td>{element.grkcal} gr/k</td>
    </tr>
  ));

  return (
    <Layout isPrivate = {true}>

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


    </Layout>
  )
}

export default Cuadrodieta