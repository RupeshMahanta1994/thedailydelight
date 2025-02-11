
import HeroSection from '@/commons/HeroSection/HeroSection'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
    return (
        <div>

            <div className='hidden sm:block'>
                <HeroSection />
            </div>
            <h1>Home page</h1>
            <h1>Posts</h1>

        </div >
    )
}

export default HomePage