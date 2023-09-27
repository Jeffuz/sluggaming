import React from 'react'
import { FaInstagram, FaXTwitter, FaTwitch, FaYoutube, FaTiktok, FaFacebook, FaDiscord } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='font-Montserrat min-[1100px]:mx-[215px] mx-20'>
        <section id='Contact Us' className='leading-[50px] pt-[138px]'>
          <div className='text-[#00588F] text-[40px]'>
            Contact Us
          </div>
          <div className='text-black text-[25px]'>
            Have a question or something to share? We're here to listen!
            Drop us a message through the contact form below and let's chat.
          </div>
        </section>
        <section id='Social' className='mt-[30px]'>
          <div className='text-[40px] leading-[70px]'>
            Get Social With Us!
          </div>
          <div className='flex gap-[20px] text-[#228BE6] mt-[20px]'>
            <Link to={"https://www.instagram.com/sluggamingucsc/?hl=en"}>
              <FaInstagram className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
            <Link to={"https://twitter.com/sluggamingucsc?lang=en"}>
              <FaXTwitter className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
            <Link to={"https://www.twitch.tv/slugesports"}>
              <FaTwitch className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
            <Link to={"https://www.youtube.com/@sluggaming114"}>
              <FaYoutube className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
            <Link to={"https://www.tiktok.com/@sluggamingucsc?ug_source=op.auth&ug_term=Linktr.ee&utm_source=awyc6vc625ejxp86&utm_campaign=tt4d_profile_link&_r=1"}>
              <FaTiktok className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
            <Link to={"https://www.facebook.com/sluggamingucsc/"}>
              <FaFacebook className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
            <Link to={"https://discord.com/invite/GKQdtHf32t"}>
              <FaDiscord className='w-[48px] h-[48px] max-[600px]:w-[30px]' />
            </Link>
          </div>
        </section>
        <section id='Contact Information' className='pt-[25px]'>
          <div className='text-black text-[40px]'>
            Contact Information
          </div>
          <div className='text-black text-[20px]'>
            1156 High Street<br />
            Santa Cruz, CA 95048<br />
            United States
          </div>
        </section>
        <section id="Button" className='pt-[30px] pb-[50px]'>
          <div className='text-white'>
            <Link to={"mailto:ucscesportsclub@gmail.com"} className='min-[1100px]:text-[21px] text-[12px] bg-[#228BE6] py-[20px] px-[34px] rounded-3xl'>
              Email Us
            </Link>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Contact