import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/icon4.png"
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
function Nav() {
  let [visible , setvisible] = useState(false)
  return (
    <div id='Nav'>
      {visible ?<div className="hamburger">
        <div className="ham1">Login</div>
        <div className="ham1">Sign Up</div>
        <div className="ham1">List Your Home</div>
        <div className="ham1">Help Center</div>
      </div>:<div></div>}
        <div className="nav1">
          <div className="logo">
            <img src={logo} alt="" width="30px"/>
            <h1>Smart Rent System</h1>

          </div>
          <div className="search">
            <input type="text" placeholder='Search Destination' />
            <button><span>Search</span> <IoSearch /></button>
          </div>
          <div className="ham">
            <button id='btn1'> List Your Home</button>
            <button id='btn2'  onClick={()=>{
              setvisible(prev=>!prev)
            }}>
              <GiHamburgerMenu id='svg1'/>
              <CgProfile id='svg2'/>

            </button>
          </div>
        </div>
        <div className="nav2">
          <div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div>
          <div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div>
          <div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div>
          <div className="svg11"><PiFarm /><h3>Farm Houses</h3></div>
          <div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div>
          <div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div>
          <div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div>
          <div className="svg11"><SiHomeassistantcommunitystore /><h3>Shops</h3></div>
          <div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div>
        </div>
        
    </div>
  )
}

export default Nav