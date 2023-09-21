import React from 'react'

const StaffCard = ({ name, role, location, image, username, pronouns, content }) => {
  return (
    <div className='font-Montserrat'>
      <section id='front'>
        <div className='border'>
          <img src={require(`../../images/Staff Page/${image}`)} alt={name} loading="lazy" />
          <div>{name}</div>
          <div>{role}</div>
          <div>{location}</div>
        </div>
      </section>
      <section id='back'>
        <div className='bg-[#CCC] rounded-[20px] hidden'>
          <div>{username}</div>
          <div>{pronouns}</div>
          <div>{content}</div>
        </div>
      </section>
    </div>
  )
}

export default StaffCard