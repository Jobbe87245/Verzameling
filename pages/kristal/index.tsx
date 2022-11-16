import type { NextPage } from 'next'
import Head from 'next/head'

import { kristallen } from '@prisma/client'

import { Header, Footer } from '@Components/basic'

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/kristallen/getAll")
    const data: kristallen[] = await res.json()
    return {
        props: {
            kristallen: data
        }
    }
}

const index: NextPage = ({ kristallen }: any) => {
    return (
        <div>
            <Head>
                <title>Kristal</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='collectie'>
                {kristallen.map((k:kristallen) => (
                     <div key={k.id} className="kristal" style={{ ['--kristal_kleur' as any]: k.kleur }} >
                         <h2>{k.naam}</h2>
                         <img className='kristalimg' src={`/media/kristal/${k.id}.jpg`} />
                         <p>
                             prijs: {k.prijs}<br />
                             kleur: {k.kleur}<br />
                             inhoud: {k.inhoud}<br />
                             zodiac: {k.zodiac.symbol} - {k.zodiac.name} - {k.zodiac.gloss}
                         </p>
                     </div>
                ))}
                <div className='voegToe'>
                    <h1><a href="kristal/new">Voeg een kristal toe</a></h1>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default index