import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const Recruitment = () => {
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
        <section id='Recruitment' className='pt-[150px]'>
          <div className='flex justify-center text-[60px] text-[#00588F]'>
            Recruitment
          </div>
          <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px]'>
            <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
          </div>
          <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[50px]'>
            Slug Esports is always looking out for new talent to join our teams for our collegiate games! If you are interested, here’s some basic information to help make this process easier.
          </div>
        </section>
        <section id='Requirements' className='min-[1100px]:px-[215px] px-[50px] pt-[50px] pb-[50px]'>
          <div className='text-black text-[40px]'>
            Requirements
          </div>
          <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
            <li>Must be a current or incoming full-time student at UCSC</li>
            <ul className='list-disc list-inside pl-[20px]'>
              <li>Learn more about <u><a href='https://admissions.ucsc.edu/'>UCSC Admissions</a></u></li>
            </ul>
            <li>Minimum Rank for each game: (Peak of last season)</li>
            <ul className='list-disc list-inside pl-[20px]'>
              <li>League of Legends: Diamond</li>
              <li>Valorant: Immortal</li>
              <li>Overwatch: Grandmaster</li>
              <li>Apex Legends: Gold</li>
              <li>Rocket League: Diamond</li>
              <li>Call of Duty: None</li>
            </ul>
          </ul>
        </section>
        <section id='Application Process' className='min-[1100px]:px-[215px] px-[50px] pb-[50px]'>
          <div className='text-black text-[40px]'>
            Application Process
          </div>
          <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
            <li>Fill out our <u><a href='https://docs.google.com/forms/u/5/d/e/1FAIpQLSd23cajjT7NUSil7XdLnuHbh3DKDNCVmdSIZYrb4Ruzz7Tzxg/viewform?usp=send_form'>Recruitment Interest</a></u> form if you are an incoming or prospective student to help us track your UC application/status.</li>
            <li>Eligible applicants will be invited to try out as we prepare rosters for the new year.</li>
            <ul className='list-disc list-inside pl-[20px]'>
              <li>Please note that we may not respond to every applicant</li>
              <li>If you have any questions, feel free to email us (<u><a href='mailto:ucscesportsclub@gmail.com'>ucscesportsclub@gmail.com</a></u>)</li>
            </ul>
            <li>Tryout application forms will be released on our website, discord, and social media for current students and eligible incoming students.</li>
            <ul className='list-disc list-inside pl-[20px]'>
              <li>Please note the deadlines for the forms and dates for tryouts!</li>
            </ul>
            <li>Tryouts will be held during or shortly before the school year, depending on the season’s schedule.</li>
            <li>A final roster will be finalized before the season begins.</li>
          </ul>
        </section>
        <section id='Perks of Collegiate Player' className='min-[1100px]:px-[215px] px-[50px] pb-[50px]'>
          <div className='text-black text-[40px]'>
            Perks of Collegiate Player
          </div>
          <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
            <li>Free Player Jersey for Varsity Team</li>
            <ul className='list-disc list-inside pl-[20px]'>
              <li>Discounted Player Jersey for Junior Varsity Team</li>
            </ul>
            <li>Social Media Advertisement (MVP, Team Rosters, Player Portraits, Play of the Game clips, and more)</li>
            <li>Discord role of “Collegiate Player”</li>
            <li>Shoutout in General Meeting after Tournaments</li>
            <li>Extra Entry in Giveaways</li>
          </ul>
        </section>
        <section id='Achievements' className='min-[1100px]:px-[215px] px-[50px] pb-[150px]'>
          <div className='text-black text-[40px]'>
            Achievements
          </div>
          <div className='text-[20px] leading-[50px]'>
            Check out our team's awesome achievements – from epic wins to incredible comebacks, our players have shown true gaming prowess and teamwork that's at the heart of Slug Gaming!
          </div>
          <div className='text-white pt-[50px]'>
            <Link to={'/achievements'} className='bg-[#00588F] min-[1100px]:p-[33px] px-[10px] py-[33px] rounded-3xl min-[1100px]:text-[21px] text-[12px]'>
              CLICK HERE TO VIEW TEAM ACHIEVEMENTS
            </Link>
          </div>
        </section>
      </div>
    </motion.div>

  )
}

export default Recruitment