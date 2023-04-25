import React from 'react'
import {FiUser} from "react-icons/fi"
import g1 from "../../Data/movieimage/bg.png"
import g2 from "../../Data/movieimage/bgt.png"
import g3 from "../../Data/movieimage/mj.png"

const Promos =()=> {
  return (
   <div className="my-20 py-10 md:px-20 px-8 bg-gray-900">
    <div className="lg:grid lg:grid-cols-3 lg:gap-10 items-center">
      <div className="flex lg:gap-10 gap-6 flex-col">
        <h1 className="xl:text-2xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
         Download Your Movies Watch Offline <br/> Enjoy On Your Mobile
        </h1>
        <p className="text-gray-400 leading-6 xl:leading-8 text-sm xl:text-base "> lorem ipsum dolor sit amet, con lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ips orem ipsum dolor sit amet, con lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum lorem ipsum dolor sit amet lorem ip</p>
        <div className="flex gap-4 md:text-lg text-sm">
          <div className="flex-col bg-black text-[#FF0000] px-6 py-3  rounded font-bold">
            HD 4K
          </div>
          <div className="flex-rows gap-4 bg-black text-[#FF0000] px-6 py-3  rounded font-bold">
            <FiUser/> 2K
          </div>
         
        </div>
        
      </div>
      <div className="  ">
            <img src={ g3} alt="Mobile App" className=" object-contain "/>
          </div>
           
    </div>
   </div>
  )
}

export default Promos;