import { BellAlertIcon, BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import NavItem from './NavItem'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'


const Navbar = () => {

    const [mobileMenuItem, setMobileMenu] = useState(false)
    const [accountMenuItem, setAccountMenuItem] = useState(false)

    const [showBack, setShowBack] = useState(false)
    const topOffset=55

    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY>=topOffset) {
                setShowBack(true)
            }
            else{
                setShowBack(false)
            }
            
        }
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
       
    }, [])


    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenuItem)
    }

    const toggleAccountMenu = () => {
        setAccountMenuItem(!accountMenuItem)
    }
    return (
        <nav className='w-full fixed z-20'>
            <div className={`px-4 py-6 flex flex-row transition ${showBack ? 'bg-zinc-950 bg-opacity-95' : ''}`}>
                <img className='lg:h-8 h-6' src='/images/logo.png' />
                <div className='flex-row lg:flex hidden ml-12 gap-5'>
                    <NavItem name='Home' active></NavItem>
                    <NavItem name='Films' ></NavItem>
                    <NavItem name='Series' ></NavItem>
                    <NavItem name='New & Popular'></NavItem>
                    <NavItem name='Browse My Languages'></NavItem>
                </div>
                <div onClick={toggleMobileMenu} className='lg:hidden relative flex flex-row items-center gap-2 ml-6 cursor-pointer'>
                    <p className='text-white'>Browse</p>
                    <ChevronDownIcon className='w-5 text-white' />
                    <MobileMenu visible={mobileMenuItem} />
                </div>
                <div className='flex flex-row ml-auto gap-7 items-center'>
                    <div className='cursor-pointer'>
                        <MagnifyingGlassIcon className='text-white w-5' />
                    </div>
                    <div className='cursor-pointer'>
                        <BellIcon className='text-white w-5' />
                    </div>
                    <div onClick={toggleAccountMenu} className='flex cursor-pointer flex-row ml-auto gap-2 items-center'>
                        <div className='lg:h-8 lg:w-8 h-6 w-6 overflow-hidden'>
                            <img src='/images/default-red.png' />
                        </div>
                        <ChevronDownIcon className='w-5 text-white' />
                        <AccountMenu visible={accountMenuItem}/>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar