import React, { useEffect, useState } from 'react'
import store from '../utils/store'
import { useRouter } from 'next/router'

const Layout = ({ children, isPrivate = false }) => {
    const router = useRouter();
    const [show, setShow] = useState(false);

    useEffect(() => {
        start()
    }, [])

    function start() {
        const usuario = store.getUsuario();
        console.log(`isPrivate :: ${isPrivate}`);
        if (isPrivate) {
            if (!usuario) {
                router.replace('/');
            } else {
                setShow(true)
            }


        } else {
            if (usuario) {
                router.push('/buscador')
            } else {
                setShow(true)
            }

        }
    }

    return (
        <main>
            {show ? children : <h2> Cargando ... </h2>}
        </main>
    )
}
export default Layout;