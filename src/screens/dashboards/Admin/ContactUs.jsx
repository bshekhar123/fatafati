import React from 'react'
import Layout from '../../../layouts/Layout'
import Head from '../../../components/home/Head';
import pic from "../../../Data/movieimage/vil.jpg"
import { FaVoicemail } from 'react-icons/fa';
import { FiMapPin, FiPhoneCall } from 'react-icons/fi';

const ContactUs = () => {
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Any Query Leave a Mail.",
      icon: FaVoicemail,
      contact: "info@fatafati.com"
    },
    {
      id: 2,
      title: "Call Us",
      info: "Call at our customer care",
      icon: FiPhoneCall,
      contact: "1800 2121 655"
    },
    {
      id: 1,
      title: "Location",
      info: "1858/1, Rajdanga Main Road Acropolis, 18th Floor, Kolkata, WB 700107",
      icon: FiMapPin,
      contact: ""
    }
  ]
  return (
    <>
      <Layout>
        <div className="min-height-screen container mx-auto px-2 my-6">
          <Head title="Contact Us" />
          <div className="grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8">
            {
              ContactData.map((item) => (
                <div key={item.id} className=" border border-gray-500 flex-colo p-10 bg-gray-900  rounded-lg text-center">
                  <span className="flex-colo w-20 h-20 rounded-full bg-black text-[#FF0000] text-2xl mb-4 ">
                    <item.icon />
                  </span>
                  <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                  <p className='mb-0 text-sm text-zinc-400'>
                  <a href={`mailto: ${item.contact}`} className='text-blue-700'>
                  {item.contact}
                  </a> {"  "}
                  {item.info}</p>
                  
                </div>
              ))
            }
          </div>

        </div>

      </Layout>
    </>
  )
}

export default ContactUs;