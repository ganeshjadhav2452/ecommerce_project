import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <footer className='d-flex footerDiv justify-content-around text-light bg-dark  '>
    <div className="branding mt-2 ">
   <h2>The Generics</h2>
    </div>
    <div className="socialMedial  mt-2 ">
    <a href="https://www.youtube.com/channel/UCkVPOjoqflsWWlVBch1cb5g"   target="_blank"  className="sMedia">
        <img src="https://source.unsplash.com/niUkImZcSP8" alt="youtube" className='sMediaIcon' />
    </a>
    <a href="https://www.instagram.com/ganesh_s.jadhav/"   target="_blank"  className="sMedia">
        <img src="https://source.unsplash.com/_tF3vug2FhQ" alt="Instagram" className='sMediaIcon' />
    </a>
    <a href="https://t.me/frontendwebsitedevelopers"   target="_blank"  className="sMedia">
        <img src="https://source.unsplash.com/u4F54GIZWGI" alt="Telegram" className='sMediaIcon'/>
    </a>
    </div>
   </footer>
  )
}

export default Footer