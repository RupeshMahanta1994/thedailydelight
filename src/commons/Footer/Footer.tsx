import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='h-[18rem] bg-ring text-background  flex flex-col gap-3 items-center justify-center'>


            <p className='capitalize text-center tracking-wider'>business enquiries?</p>
            <div className='flex flex-col md:flex-row md:items-end  gap-2 md:gap-3'><p className='text-4xl md:text-5xl font-bold uppercase'>I m ready!</p> <p className='underline  text-xl md:text-2xl flex justify-center md:item-end tracking-wider capitalize text-orange-400'>Let's Chat.</p> </div>
        </footer>
    )
}

export default Footer