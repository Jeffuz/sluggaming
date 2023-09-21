import React from 'react'

const Achievements = () => {
  return (
    <div className='font-Montserrat'>
      <section id='Achievements' className='pt-[150px]'>
        <div className='flex justify-center min-[1100px]:text-[60px] text-[50px] text-[#00588F]'>
          Achievements
        </div>
        <div className='flex justify-center mt-[-10px] max-[1100px]:px-[50px]'>
          <img src={require('../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" />
        </div>
        <div className='min-[1100px]:px-[215px] px-[50px] text-[25px] pt-[50px]'>
          Step into the world of Slug Gaming's triumphs – where victories, comebacks, and team spirit paint the picture of our gaming excellence!        </div>
      </section>
      <section id='Games' className='pt-[50px]'>
        <div className='grid grid-cols-2 min-[1100px]:gap-x-[300px] min-[1100px]:gap-y-[100px] gap-4 max-[1100px]:grid-cols-1 min-[1100px]:px-[215px] px-[50px]'>
          <div>
            <div className='text-black text-[40px]'>
              League of Legends
            </div>
            <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
              <li>Zotac Cup #15 Top 3</li>
              <li>ONE Esports Community Tournament #4 Top 5</li>
              <li>CLoL West Conference Championship 2023 Top 5</li>
              <li>JsMethod Open Tournament Top 5</li>
              <li>CLoL West Conference Championship 2022 Top 9</li>
              <li>Fanime Tournament 2018 Winner</li>
              <li>Western Esports Conference Top 3</li>
              <li>Alliance Esports Tournament 2020 Winner</li>
              <li>CSL Division 3 Top 4</li>
            </ul>
          </div>
          <div>
            <div className='text-black text-[40px]'>
              Valorant
            </div>
            <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
              <li>PEL Spring 2022 Finalists </li>
              <li>Redbull Campus Clutch 2022 Northwest Finalists </li>
              <li>IGLeague Fall 2022 frenzy 3 winners</li>
              <li>CVAL West Fall 2022 Top 13</li>
              <li>UCEI 2023 Top 4</li>
              <li>NECC Spring 2023 Southwest Finalists</li>
              <li>CVAL West Spring  2023 Top 5</li>
              <li>PEL Spring 2023 North Winners</li>
              <li>PEL Spring 2023 California Champions</li>
              <li>HigherlanderCon Valorant Tournament Winner</li>
            </ul>
          </div>
          <div className=''>
            <div className='text-black text-[40px]'>
              Overwatch
            </div>
            <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
              <li>NECC championship 2021 Winners</li>
              <li>Overwatch Collegiate Top 8-16 Nationally</li>
              <li>CSL GameStop Weeklies Winner</li>
              <li>Fanime Con 2017 Winner</li>
              <li>Fanime Con 2018 Winner</li>
            </ul>
          </div>
          <div className=''>
            <div className='text-black text-[40px]'>
              Apex Legends
            </div>
            <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
              <li>2022 Summer Splash Tournament Winner</li>
              <li>Phase One League Finalist</li>
              <li>AVGL Collegiate Weekly Winner</li>
              <li>Octane Collegiate Summer Olympus Trios Winner</li>
              <li>Octane Collegiate Finalist</li>
              <li>ING Tourney #7 Top 3</li>
              <li>ING Tourney #6 Winner</li>
              <li>ING Tourney #5 Top 3</li>
              <li>ING Tourney #4 Top 4</li>
              <li>JDRF Charity Tourney Winner</li>
              <li>ING Tourney #2 Top 3</li>
              <li>ING Tourney #1 Top 4</li>
              <li>Revival Games Trios Tourney Winner</li>
            </ul>
          </div>
          <div>
            <div className='text-black text-[40px]'>
              Counter Strike GO
            </div>
            <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
              <li>CSL Tik Tok Cup #1 2019 Winner</li>
              <li>Division 1 NACCS Collegiate League 2019 Winner</li>
              <li>Division 2 NACCS Collegiate League 2019 Winner</li>
              <li>Collegiate Starleague Division 1 2019 Finalist</li>
            </ul>
          </div>
          <div className=''>
            <div className='text-black text-[40px]'>
              Rocket League
            </div>
            <ul className='list-disc text-[20px] pl-[23px] leading-[50px]'>
              <li>CCA Spring Open #1 Top 9</li>
              <li>Pacific Esports League Summer Splash Grand Finalists</li>
            </ul>
          </div>
        </div>
      </section>
      <section id='Banner' className='min-[1100px]:py-[100px] pt-[30px] pb-[50px] '>
        <div className='flex justify-center min-[1100px]:px-[215px] px-[50px] '>
          <img src={require('../images/Achivements Page/DIsplay.png')} alt='Yellow Line' loading="lazy" />
        </div>
      </section>
    </div>
  )
}

export default Achievements