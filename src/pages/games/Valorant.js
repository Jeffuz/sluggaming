import React from 'react'
import valorantTeamData from '../../data/Valorant Team.json';
import TeamCard from '../../components/Teams Page/TeamCard';
import { motion } from 'framer-motion';

const Valorant = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };
    return (
        <div>
            <section className=' pt-[87px] flex justify-center' id='Banner'>
                <div className='absolute h-[300px] w-full overflow-hidden'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/Valorant Banner.png`)}
                        className="h-full object-cover"
                        loading="lazy"
                        alt='Valorant Banner'
                    />
                </div>
                <div className='absolute pt-5'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/Valorant Logo.png`)}
                        loading="lazy"
                        alt='Valorant Logo'
                    />
                </div>
            </section>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <section className='pt-[275px] font-Montserrat'>
                    <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F] pt-[50px]'>
                        UCSC Gold
                    </div>
                    <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] max-[1100px]:pt-[20px]'>
                        <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
                    </div>
                    <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
                        University of California, Santa Cruz | Valorant Varsity Team
                    </div>
                    <div className='container mx-auto py-24 px-8 '>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                            {valorantTeamData.map((teamMember) => (
                                <TeamCard key={teamMember.id} {...teamMember} />
                            ))}
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    )
}

export default Valorant
