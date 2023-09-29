import React from 'react'
// import Panel_1 from '../components/Home Panel/Panel_1'

const Home = () => {
    return (
        <section className=''>
            <div className='Banner'>
                <img src={require('../images/Home Page/Banner.png')} alt='home-page-banner' className='hidden md:block' loading="lazy"></img>
            </div>
        </section>
    )
}

export default Home