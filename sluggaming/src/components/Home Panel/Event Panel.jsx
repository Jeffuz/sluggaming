import React from 'react'

const Event_Panel = ({ Title, Quote, Name, Content, Image }) => {
    return (
        <div className='min-[1305px]:pt-16 pt-8'>
            <div className='font-Montserrat flex flex-col'>
                <div className='flex flex-col min-[1305px]:flex-row item' id='card'>
                    <div className='min-[1305px]:w-[50%] overflow-hidden' id='right-side'>
                        {Image && (
                            <img src={require(`../../images/Home Page/${Image}`)}
                                alt={Title}
                                loading="lazy"
                                className='w-full' />
                        )}
                    </div>
                    <div className='flex flex-col min-[1305px]:w-[50%] bg-[#D9D9D9] justify-center px-12 py-12' id='left-side'>
                        <div className='text-[#00588F] text-5xl pb-12'>{Title}</div>
                        <div className='text-black text-2xl leading-[45px] pb-5'>{Content}</div>
                        <div className='text-black text-xl leading-[35px]'>{Quote}<br />{Name}</div>
                    </div>
                </div>
                <img src={require('../../images/Achivements Page/Yellow Line.png')} alt='Yellow Line' loading="lazy" className='w-full' />
            </div>
        </div>
    )
}

export default Event_Panel