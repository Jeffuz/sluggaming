import React from 'react'
import ReactCardFlip from 'react-card-flip'
import { useState } from 'react';

const StaffCard = ({ name, role, location, image, username, pronouns, content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  function flipCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <div className=''>
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <section id='front' className='card' onClick={flipCard}>
          <div className='shadow-lg rounded-[25px]'>
            <div className='rounded-t-[25px]'>
              <img src={require(`../../images/Staff Page/${image}`)} alt={name} loading="lazy" width="745" height='676' />
            </div>
            <div className='px-7 pt-7 pb-14 bg-[#00588F] rounded-b-[25px]'>
              <div className='text-3xl text-[#FFCC04] mb-3'>
                {name}
              </div>
              <div className='text-white text-2xl pt-1'>
                {role}
              </div>
              <div className='text-white text-2xl flex items-center pt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='mr-2'>
                  <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {location}
              </div>
            </div>
          </div>
        </section>
        <section id='back' className=''>
          <div className='card card-back bg-[#CCC] shadow-lg rounded-[25px]' onClick={flipCard}>
            <div className='text-[#00588F] text-3xl'>{username}</div>
            <div className='text-white pt-2 text-2xl'>{pronouns}</div>
            <div className='text-black pt-5 text-xl'>{content}</div>
          </div>
        </section>
      </ReactCardFlip>
    </div>
  )
}

export default StaffCard
