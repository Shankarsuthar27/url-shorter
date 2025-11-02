import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between items-center px-3 text-white'>
            <div className='logo font-bold text-lg mr-2'>
                BitLinks
            </div>
            <ul className='flex justify-center gap-10 items-center md:w-[100vh] md:gap-6'>
                <Link href="/"><li>Home</li></Link>   
                <Link href="/about"><li>About</li></Link>   
                 <Link href="/shorten"> <li>Shorten</li></Link>        
                 <Link href="/contact"><li>Contact Us</li></Link>

                 <li className='flex md:gap-3 gap-4 '>
                    <Link href="/shorten "><button className='bg-purple-500 shadow-lg md:p-3 rounded-lg md:py-1 font-bold p-1 py-1'>Try Now</button></Link>
                    <Link href="/github"><button className='bg-purple-500 shadow-lg p-3 rounded-lg py-1 font-bold'>GitHub</button></Link>                 
                    </li>
            </ul>
        </nav>
    )

}

export default Navbar
