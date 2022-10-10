import React from 'react'
import { useState } from 'react';
import { TextInput, Group, Button,  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger, Stack, UnstyledButton, Avatar,
  useMantineTheme, ScrollArea, ActionIcon, IconAdjustments} from '@mantine/core';
  import Menu from '../components/Menu';

const Nosotros = () => {
    return (
        <div>
    
    <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Menu></Menu>
          }
        >
          <Text>Desde nosotros</Text>
        </AppShell>
        </div>
      )
}

export default Nosotros