import React from 'react'
import { useState } from 'react';
import { TextInput, Group, Button,  AppShell, Navbar, Header, Footer, Aside,Text, MediaQuery, Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments} from '@mantine/core';
import { Image } from '@mantine/core';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div>

<AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Menu></Menu>
      }
    >
      <Text>Desde Inicio</Text>
      <Image src='https://inuba.com/wp-content/uploads/2022/03/como-calcular-indice-masa-corporal.webp ' width={1000} height={600}></Image>
    </AppShell>
    </div>
    
    
  )
}


    
export default Home