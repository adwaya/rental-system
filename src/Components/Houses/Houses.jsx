import React from 'react'
import "./Houses.css"
import Card from "../Card/Card";
import house from '../../assets/house1.jpg'
import house1 from '../../assets/housekitchen.jpg'
import house2 from '../../assets/houseliving.jpg'


import villa from '../../assets/villa.jpg'
import villa1 from '../../assets/villa1.jpg'
import villa2 from '../../assets/villa2.jpg'

import village from '../../assets/village.jpg'
import village1 from '../../assets/village1.webp'
import village2 from '../../assets/village2.jpg'

import ski from '../../assets/ski1.avif'
import ski1 from '../../assets/ski2.avif'
import ski2 from '../../assets/ski.jpg'







function Houses() {
  return (
    <div id='houses'>
        <Card image1={house} image2={house1} image3={house2} title={"3 BHK Villa in Tiruppur"} price={"40,000"}/>
        <Card image1={villa} image2={villa1} image3={villa2} title={"Villa at Karur"} price={"50,000"}/>
        <Card image1={village} image2={village1} image3={village2} title={"Village House Near kaniyakumari"} price={"20,000"}/>
        <Card image1={ski} image2={ski1} image3={ski2} title={"Houses At Nelagiri"} price={"70,000"}/>
    </div>
  )
}

export default Houses