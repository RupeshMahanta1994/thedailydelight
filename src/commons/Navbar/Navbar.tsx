'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import Image from 'next/image'
import DropdownMobileMenu from './DropdownMobileMenu'
import MenuBar from './DesktopMenu'




type Props = {}

const Navbar = (props: Props) => {
    return (
        <>
            <nav className='flex items-center justify-between px-4 py-4'>
                <div className='md:flex md:items-center md:gap-4'>
                    <Image src={"/logo.png"} height={60} width={60} alt='Logo' />
                    <div className='hidden lg:block'>
                        <MenuBar />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <ThemeToggle />

                    <div className='lg:hidden'>

                        <DropdownMobileMenu />
                    </div>
                </div>

            </nav>
            <div>

            </div>
        </>
    )
}

export default Navbar













