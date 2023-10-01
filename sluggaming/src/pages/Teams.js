import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Teams = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)
  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index)
  }

  const cardVariants = {
    expanded: {
      width: "400px"
    },
    collapsed: {
      width: "200px"
    }
  }

  const cardImages = [
    '/league_of_legends.png',
    '/valorant.png',
    '/overwatch2.png',
    '/apex.png',
    '/rocket_league.png',
    '/call_of_duty.png',

  ];

  const cardLink = [
    "/teams/league_of_legends",
    "/teams/valorant",
    "/teams/overwatch",
    "/teams/apex_legends",
    "/teams/rocket_league",
    "/teams/call_of_duty"
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className='font-Montserrat'>
        <section className='pb-[50px]'>
          <div className='pt-[150px]'>
            <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F] text-center px-5'>
              Our Esport Teams
            </div>
            <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] pb-[50px] '>
              <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
            </div>
          </div>
          <div className=' flex flex-col md:flex-row justify-center items-center gap-5'>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                className={`cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''}`}
                variants={cardVariants}
                initial="collapsed"
                animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(index)}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${cardImages[index]})`,
                }}
              >
                {console.log(`Image URL: ${process.env.PUBLIC_URL}${cardImages[index]}`)} 
                {index === expandedIndex && (
                  <div className='h-full flex flex-col justify-end'>
                    <div className='flex justify-center py-12'>
                      <Link to={cardLink[index]} className='p-2 rounded-lg text-white bg-[#00588F]'>See More</Link>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default Teams