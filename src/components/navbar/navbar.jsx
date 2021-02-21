import React, { useState } from 'react'
import './navbar.scss'

const Navbar = () => {

    const menuItems = [
        { item: 'Home' }, { item: 'Contact' }, { item: 'About' }, { item: 'Skills' }, { item: 'Projects' },
    ]

    const [hidden, setHidden] = useState(true);

    const toggleMenu = () => {
        setHidden(!hidden)
    }

    return (
        <nav>
            <div className='navbar-items container'>
                <div className='logo'> <a>Portfo<span>lio</span></a> </div>
                <ul className='menu' style={hidden ? null : { top: '0' }}>
                    {menuItems.map((link, index) => <li onClick={() => setHidden(true)} key={index}><a>{link.item}</a></li>)}
                </ul>

                <div className='menu-btn' onClick={() => toggleMenu()
                }>
                    {hidden ? <span>☰</span> : <span>X</span>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
