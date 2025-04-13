import React from 'react'
import { useState } from 'react'
import {Link} from "react-scroll"
import {data} from "../restApi.json"
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
    const [show, setShow] = useState(false);
  return (
    <div>
      <nav>
        <div className="logo">HOTEL GANARAYA</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                {data[0].navbarLinks.map(element=>{
                    return(
<Link to={element.link} spy={true} smooth={true} duration={500} key={element.id}>
                        {element.title}
                    </Link>
                    )
})}
            </div>
            <button className='menuBtn'>OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
            <GiHamburgerMenu></GiHamburgerMenu>
        </div>
      </nav>
    </div>
  )
} 

export default Navbar