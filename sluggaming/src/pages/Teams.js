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
    '../images/Team Page/Esports Banner/Apex Banner.png',
    '../images/Team Page/Esports Banner/COD Banner.png',
    '../images/Team Page/Esports Banner/LoL Banner.png',
    '../images/Team Page/Esports Banner/Overwatch Banner.png',
    '../images/Team Page/Esports Banner/Rocket League Banner.png',
    '../images/Team Page/Esports Banner/Valorant Banner.png',
  ];

  const cardLink = [
    "/teams/apex_legends",
    "/teams/call_of_duty",
    "/teams/league_of_legends",
    "/teams/overwatch",
    "/teams/rocket_league",
    "/teams/valorant"
  ]

  return (
    <div className='font-Montserrat'>
      <section className='pb-[50px]'>
        <div className='pt-[150px]'>
          <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F]'>
            Our Esport Teams
          </div>
          <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] pb-[50px]'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
        </div>
        <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded' : ''}`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${cardImages[index]})`
              }}
            >
              {index === expandedIndex && (
                <div className='h-full flex flex-col justify-end'>
                  <div className='flex justify-center py-5'>
                    <Link to={cardLink[index]} className='p-2 rounded-lg text-white bg-[#00588F]'>See More</Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Teams