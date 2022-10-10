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

const Tienda = () => {
    return (
        <div>
    
    <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Menu></Menu>
          }
        >
          <Text>Desde Tienda</Text>
        </AppShell>
        </div>
      )
}

export default Tienda