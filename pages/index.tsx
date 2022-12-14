import type { NextPage } from 'next'
import Head from 'next/head'

import { kristallen } from '@prisma/client';
import { useState } from 'react';

import { Header, Footer } from '@Components/basic'
import Script from 'next/script';


export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/kristallen/getSelect")
    const data: kristallen[] = await res.json()
    return {
        props: {
            kristallen: data
        }
    }
}

const Home: NextPage = ({ kristallen }: any) => {
    return (
        <div>
            <Head>
                <title>Kristal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='index'>
                <div className='parent'>
                    <div className='div1'>
                        {kristallen.map((k) => (
                            <div key={k.id} className="kristal" style={{ ['--kristal_kleur' as any]: k.kleur }} >
                                <h2>{k.naam}</h2>
                                <img className='kristalImg' src={`/media/kristal/${k.id}.jpg`} />
                                <p>
                                    prijs: {k.prijs}<br />
                                    kleur: {k.kleur}<br />
                                    inhoud: {k.inhoud}<br />
                                    zodiac: {k.zodiac.symbol} - {k.zodiac.name} - {k.zodiac.gloss}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='div2'>
                        <h1>Kristal of Edelsteen</h1>
                        <p>Het grote verschil tussen een edelsteen en een kristal is dat een edelsteen uit meerdere mineralen bestaat. Een gesteente heeft ook weer een vaste vorm en komt wederom uit de natuur. Gesteente kennen drie hoofdgroepen, namelijk stollingsgesteente, metamorf gesteente en sedimentair gesteente. </p>
                    </div>
                    <div className='div3'>
                        <h1>Ons Bedrijf</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi expedita autem est doloremque asperiores, eligendi sapiente harum repellendus facere quas totam recusandae! Ullam quaerat corrupti atque laborum accusamus esse labore.</p>
                        <h2>Hoe zijn we ontstaan</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nisi molestias, at error est sint. Animi, iste tempore architecto ab vel non vitae, nemo doloremque corporis dolore, consequuntur omnis incidunt?</p>
                    
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home