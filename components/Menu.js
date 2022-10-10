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
import Link from 'next/link';

function Menu() {
    const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
    return (
        <div>
            <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>

                <Navbar.Section grow mt="md">
                    <Stack align="flex-start" justify="flex-start" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
                        <Link href='/'>
                        
                        <UnstyledButton>
                            <Group>
                            
                                <Avatar size={40} color="violet">IO</Avatar>
                                <div>
                                
                                    <Text>Inicio</Text>
                                </div>
                            </Group>
                        </UnstyledButton>
                        </Link>
                       
                        
                        <Link href='/bmi'>
                        <UnstyledButton>
                            <Group>
                                <Avatar size={40} color="violet">BMI</Avatar>
                                <div>
                                    <Text>Indice de masa corporal</Text>
                                </div>
                            </Group>
                        </UnstyledButton>
                        </Link>

                        <Link href='/calculo'>
                        <UnstyledButton>
                            <Group>
                                <Avatar size={40} color="violet">CO</Avatar>
                                <div>
                                    <Text>Calculo</Text>
                                </div>
                            </Group>
                        </UnstyledButton>
                        </Link>
                        
                        <Link href='/buscador'>
                        <UnstyledButton>
                            <Group>
                                <Avatar size={40} color="violet">BA</Avatar>
                                <div>
                                    <Text>Buscador Alimentos</Text>
                                </div>
                            </Group>
                        </UnstyledButton>
                        </Link>
                        

                        <Link href='/cuadrodieta'>
                        <UnstyledButton>
                            <Group>
                                <Avatar size={40} color="violet">CD</Avatar>
                                <div>
                                    <Text>Cuadro Dietosentetico</Text>
                                </div>
                            </Group>
                        </UnstyledButton>
                        </Link>
                        
                       
                    </Stack>
                </Navbar.Section>
            </Navbar>
        </div>
    )
}

export default Menu