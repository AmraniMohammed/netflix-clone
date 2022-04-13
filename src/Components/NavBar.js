import React, { useEffect, useState } from 'react'
import "./NavBar.css"

function NavBar() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar')
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])


  return (
    <div className={`navContainer ${show && "navBlack"}`}>
        <img className='navLogo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt="Netflix Logo" />
        <img className='navAvatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="Netflix Logo" />
    </div>
  )
}

export default NavBar