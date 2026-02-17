import React, { useContext } from 'react'
import "./Home.css"
import Card from "../Card/Card";
import house from '../../assets/house1.jpg'
import house1 from '../../assets/housekitchen.jpg'
import house2 from '../../assets/houseliving.jpg'
import farmhouse from '../../assets/farmhouse.avif'
import farmhouse1 from '../../assets/farmhouse1.jpg'
import farmhouse2 from '../../assets/farmhouse2.jpg'
import flat from '../../assets/roomhouse.jpg'
import flat1 from '../../assets/roomhouse1.jpg'
import flat2 from '../../assets/roomhouse2.jpg'
import villa from '../../assets/villa.jpg'
import villa1 from '../../assets/villa1.jpg'
import villa2 from '../../assets/villa2.jpg'
import mountain from '../../assets/mountain.jpg'
import mountain1 from '../../assets/mountain1.jpg'
import mountain2 from '../../assets/mountain2.jpg'
import huthouse from '../../assets/huthouse.jpg'
import huthouse1 from '../../assets/huthouse1.jpg'
import huthouse2 from '../../assets/huthouse2.jpg'
import village from '../../assets/village.jpg'
import village1 from '../../assets/village1.webp'
import village2 from '../../assets/village2.jpg'
import room from '../../assets/room.jpg'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import old from '../../assets/old.jpg'
import old1 from '../../assets/old1.jpg'
import old2 from '../../assets/old2.jpg'
import roomnew from '../../assets/roomnew.jpg'
import roomnew1 from '../../assets/roomnew1.jpg'
import roomnew2 from '../../assets/roomnew2.jpg'
import hut from '../../assets/hut.webp'
import hut1 from '../../assets/hut1.jpg'
import hut2 from '../../assets/hut2.webp'
import ski from '../../assets/ski1.avif'
import ski1 from '../../assets/ski2.avif'
import ski2 from '../../assets/ski.jpg'
import { dataContext } from '../../Context/Usercontext';




function Home() {
   let{
        title,
        setTitle,
        addListing,
        setaddListing,
        addImage1,
        setaddImage1,
        addImage2,
        setaddImage2,
        addImage3,
        setaddImage3,
        price,
        setprice
   } = useContext(dataContext)
  return (
    <div id='home'> 
        <Card image1={house} image2={house1} image3={house2} title={"3 BHK Villa in Tiruppur"} price={"40,000"}/>
        <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1 BHK Farmhouse in Coimbatore"} price={"60,000"}/>
        <Card image1={flat} image2={flat1} image3={flat2} title={"1 BHK house in Kodaikanal"} price={"30,000"}/>
        <Card image1={villa} image2={villa1} image3={villa2} title={"Villa at Karur"} price={"50,000"}/>
        <Card image1={mountain} image2={mountain1} image3={mountain2} title={"Houses At Nelagiri"} price={"70,000"}/>
        <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1 BHK At Madhurai"} price={"40,000"}/>
        <Card image1={village} image2={village1} image3={village2} title={"Village House Near kaniyakumari"} price={"20,000"}/>
        <Card image1={room} image2={room1} image3={room2} title={"Rooms Avail At Koduvai"} price={"70,000"}/>
        <Card image1={old} image2={old1} image3={old2} title={"Houses At Nelagiri"} price={"70,000"}/>
        <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"Houses At Nelagiri"} price={"70,000"}/>
        <Card image1={hut} image2={hut1} image3={hut2} title={"Houses At Nelagiri"} price={"70,000"}/>
        <Card image1={ski} image2={ski1} image3={ski2} title={"Houses At Nelagiri"} price={"70,000"}/>
        
  {addListing ? 
    <Card  image1={URL.createObjectURL(addImage1)}
      image2={URL.createObjectURL(addImage2)}
      image3={URL.createObjectURL(addImage3)}
      title={title}
      price={price}
    />:""}
    </div>
  )
}

export default Home