import React from 'react'
import homePageData from '../data/Home Page.json'
import Event_Panel from '../components/Home Panel/Event Panel'

const Home = () => {
    return (
        <div>
            <section className=''>
                <div className='max-[1100px]:pt-[87px]' id='Banner'>
                    <img src={require('../images/Home Page/Banner.png')} alt='home-page-banner' className='hidden md:block' loading="lazy" />
                    <img src={require('../images/Home Page/Banner md.png')} alt='home-page-banner' className='block md:hidden' loading="lazy" />
                </div>
            </section>

            <section className='min-[1305px]:pb-16 pb-8'>
                <div className=''>
                    {homePageData.map((homeDetail) => (
                        <Event_Panel key={homeDetail.id} {...homeDetail} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home