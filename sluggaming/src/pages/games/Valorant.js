import React from 'react'
import valorantTeamData from '../../data/Valorant Team.json';
import TeamCard from '../../components/Teams Page/TeamCard';

const Valorant = () => {
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
            <section className='pt-[275px] font-Montserrat'>
                <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F] pt-[50px]'>
                    Executive Board
                </div>
                <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px] max-[1100px]:pt-[20px]'>
                    <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
                </div>
                <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[30px] text-center'>
                    Working hard for our competitive teams, Esports Directors work with our variety of gaming teams to organize scrimmages, handle tournament schedules, and ensure success for our Esports scene.
                </div>
                <div className='container mx-auto py-24 px-8 '>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                        {valorantTeamData.map((teamMember) => (
                            <TeamCard key={teamMember.id} {...teamMember} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Valorant