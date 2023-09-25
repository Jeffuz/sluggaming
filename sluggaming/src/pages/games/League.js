import React from 'react';
import leagueTeamData from '../../data/League Team.json';
import TeamCard from '../../components/Teams Page/TeamCard';

const League = () => {
    return (
        <div className="pt-[87px]">
            <section className='flex justify-center' id='Banner'>
                <div className='absolute h-[300px] w-full overflow-hidden'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/LoL Banner.png`)}
                        className="h-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div className='absolute pt-5'>
                    <img
                        src={require(`../../images/Team Page/Esports Banner/LoL Logo.png`)}
                        loading="lazy"
                    />
                </div>
            </section>
            <section className='grid md:grid-cols-2 grid-cols-1 pt-[350px] gap-4'>
                {leagueTeamData.map((teamMember) => (
                    <TeamCard key={teamMember.id} {...teamMember} />
                ))}
            </section>
        </div>
    )
}

export default League;
