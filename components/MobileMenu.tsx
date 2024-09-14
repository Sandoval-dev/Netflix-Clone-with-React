import React from 'react'

interface MobileMenuProps {
    visible?: boolean
}

const MobileMenu = ({ visible }: MobileMenuProps) => {
    if (!visible) {
        return null
    }
    return (
        <div className='text-white
     bg-black w-48 rounded-lg border-2 absolute top-8 left-8 
     flex-col py-5 border-gray-800'>
        <div className='flex flex-col gap-4'>
           <div className='text-center p-2 hover:bg-gray-200 hover:text-black transition'>
            Home
           </div>
           <div className='text-center p-2 hover:bg-gray-200 hover:text-black transition'>
            Films
           </div>
           <div className='text-center p-2 hover:bg-gray-200 hover:text-black transition'>
            New & Popular
           </div>
           <div className='text-center p-2 hover:bg-gray-200 hover:text-black transition'>
            My List
           </div>
           <div className='text-center p-2 hover:bg-gray-200 hover:text-black transition'>
            Browse My Languages
           </div>

        </div>

        </div>
    )
}

export default MobileMenu