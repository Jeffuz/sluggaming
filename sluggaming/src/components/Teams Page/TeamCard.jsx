import React from 'react'

const TeamCard = ({ ign, name, role, major, hometown, image }) => {
    return (
        <div className='font-Montserrat'>
            <div className='flex'>
                <img src={require(`../../images/Team Page/Team Members/Yunjia.png`)} loading="lazy" className=''></img>
                {/* <img src={require(`../../images/Team Page/Team Members/${image}`)} loading="lazy"></img> */}
                <div className='flex flex-col bg-[#00588F] rounded-tr-xl rounded-br-xl p-4'>

                    <div className='text-[#FFCC04] text-3xl'>
                        {ign}
                    </div>

                    <div className='text-white'>
                        <div className='text-xl'>
                            {name}
                        </div>
                        <div>
                            ROLE: <span className='italic'>{role}</span>
                        </div>
                        <div>
                            MAJOR: <span className='italic'>{major}</span>
                        </div>
                        <div>
                            HOMETOWN: <span className='italic'>{hometown}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard