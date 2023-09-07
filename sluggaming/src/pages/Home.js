import React from 'react'

const Home = () => {
    return (
        <div className=''>
            <img src={require('../images/Home Page/Banner.png')} alt='home-page-banner' className='hidden md:block'></img>
            <img src={require('../images/Home Page/Banner md.png')} alt='home-page-banner' className='pt-[85px] block md:hidden'></img>
        </div>
    )
}

export default Home