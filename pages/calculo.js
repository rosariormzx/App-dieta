import React from 'react'
import { useState } from 'react';
import { TextInput, Group, Button,  Collapse, AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments} from '@mantine/core';
  import Menu from '../components/Menu';
  import Harris from './paginas/harris';
import Oms from './paginas/oms';
import Owen from './paginas/owen';
import Valencia from './paginas/valencia';
import Mifflin from './paginas/mifflin';
import Cuadrodieta from './cuadrodieta';

const Calculo = () => {

  const [opened, setOpened] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);
  const [opened5, setOpened5] = useState(false);

    return (
        <div>
    <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Menu></Menu>
          }
        >
          <Stack justify="flex-start" spacing="xl" >
      <Button color="violet" onClick={() => setOpened((o) => !o)} variant="subtle">Harris-Benedict</Button>
      <Collapse in={opened}>
        <Harris></Harris>
      </Collapse>
      <Button color="violet" onClick={() => setOpened2((o) => !o)} variant="subtle">OMS</Button>
      <Collapse in={opened2}>
        <Oms></Oms>
      </Collapse>
      <Button color="violet" onClick={() => setOpened3((o) => !o)} variant="subtle">Owen</Button>
      <Collapse in={opened3}>
        <Owen></Owen>
      </Collapse>
      <Button color="violet" onClick={() => setOpened4((o) => !o)} variant="subtle">Valencia</Button>
      <Collapse in={opened4}>
        <Valencia></Valencia>
      </Collapse>
      <Button color="violet" onClick={() => setOpened5((o) => !o)} variant="subtle">Mifflin ST-Jeor</Button>
      <Collapse in={opened5}>
        <Mifflin></Mifflin>
      </Collapse>


          <Cuadrodieta/>

    </Stack>

        </AppShell>
        </div>
      )
}


export default Calculo