import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Codv Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                    crossorigin="anonymous" >
                </link>
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout