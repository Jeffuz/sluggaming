import React from 'react'
import Panel_1 from '../components/Home Panel/Panel_1'

const Home = () => {
    return (
        <div className=''>
            <img src={require('../images/Home Page/Banner.png')} alt='home-page-banner' className='hidden md:block'></img>
            <img src={require('../images/Home Page/Banner md.png')} alt='home-page-banner' className='pt-[85px] block md:hidden'></img>
            <Panel_1/>
        </div>
    )
}

export default Home