import React from 'react'
import StaffCard from '../components/Staff Page/StaffCard'
import esportsDirectorData from '../data/Esports Director.json'
import executiveBoardData from '../data/Executive Board.json'
import teamLeadsData from '../data/Team Leads.json'

const Staff = () => {
  return (
    <div className='pt-[100px]'>
      <h1>Executive Board</h1>
      <div>
        {executiveBoardData.map((staffMember) => (
          <StaffCard key={staffMember.id} {...staffMember} />
        ))}
      </div>
      <h1>Esports Director</h1>
      <div>
        {esportsDirectorData.map((staffMember) => (
          <StaffCard key={staffMember.id} {...staffMember} />
        ))}
      </div>
      <h1>Team Leads</h1>
      <div>
        {teamLeadsData.map((staffMember) => (
          <StaffCard key={staffMember.id} {...staffMember} />
        ))}
      </div>
    </div>
  );
};

export default Staff;