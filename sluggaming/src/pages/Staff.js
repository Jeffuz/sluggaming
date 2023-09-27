import React from 'react'
import StaffCard from '../components/Staff Page/StaffCard'
import esportsDirectorData from '../data/Esports Director.json'
import executiveBoardData from '../data/Executive Board.json'
import teamLeadsData from '../data/Team Leads.json'
import { motion } from 'framer-motion';

const Staff = () => {
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
      <div className='pt-[150px] font-Montserrat'>
        <section id='Executive Board'>
          <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F]'>
            Executive Board
          </div>
          <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] max-[1100px]:pt-[20px]'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
            Overseeing the backbone of Slug Gaming, the Executive Board arranges club meetings, sign-offs on official paperwork, and manages all the background tasks needed to keep the club running.
          </div>
          <div className='container mx-auto py-24 px-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {executiveBoardData.map((staffMember) => (
                <StaffCard key={staffMember.id} {...staffMember} />
              ))}
            </div>
          </div>
        </section>
        <section id='Esports Director'>
          <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F] pt-[50px]'>
            Esports Director
          </div>
          <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] max-[1100px]:pt-[20px]'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
            Working hard for our competitive teams, Esports Directors work with our variety of gaming teams to organize scrimmages, handle tournament schedules, and ensure success for our Esports scene.
          </div>
          <div className='container mx-auto py-24 px-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {esportsDirectorData.map((staffMember) => (
                <StaffCard key={staffMember.id} {...staffMember} />
              ))}
            </div>
          </div>
        </section>
        <section id='Team Leads' className='pb-[50px]'>
          <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F] pt-[50px]'>
            Team Leads
          </div>
          <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] max-[1100px]:pt-[20px]'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
            Dedicated to fostering a thriving gaming community, Team Leads work to keep the community informed on the Esports scene through live streams, social media updates, and engaging social gaming nights.        </div>
          <div className='container mx-auto py-24 px-8'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
              {teamLeadsData.map((staffMember) => (
                <StaffCard key={staffMember.id} {...staffMember} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Staff;