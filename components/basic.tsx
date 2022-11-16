import React from 'react'
import Link from 'next/link'

export function Header() {
    return (
        <header>
            <ul>
                <li className="links"><Link href="/contact">Contact</Link></li>
                <li className="links"><Link href="/kristal">Onze Collectie</Link></li>
                <li className="rechts"><Link href="">Winkelmand</Link></li>
                <li className="rechts"><Link href="/loginUser">Inloggen</Link></li>
                <li className="midden"><Link href="/"><img id='logo' src="/media/Logo.png" alt="" /></Link></li>
            </ul>
        </header>
    )
}

export function Footer() {
    return (
        <footer>
        </footer>
    )
}