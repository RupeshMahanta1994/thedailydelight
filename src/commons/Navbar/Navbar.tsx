'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div >
            <div className='dark:text-black'>Hello </div>

            <ThemeToggle />

        </div>
    )
}

export default Navbar