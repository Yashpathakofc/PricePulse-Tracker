import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const navIcons=[
    {src:'/assets/icons/logo.png',alt:'search'},
    {src:'/assets/icons/heart.png',alt:'search'},
    {src:'/assets/icons/user.svg',alt:'user'}

]
const Navbar = () => {
  return (
   <header className="w-full">
    <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
        <Image 
            src="/assets/icons/logo.png"
            width={30}
            height={30} 
            alt="logo"
        />
        <p className="nav-logo text-medium">
            Price<span className='text-brown'>Pulse</span>
        </p>
        </Link>
        <div className="flex items-center gap-5">
        {navIcons.map((icon)=>(
            <Image key={icon.alt}
            src={icon.src}
            alt={icon.alt} 
            width={28}
            height={28}
            className='object-contain'
            />
        ))}
        </div>

    </nav>
   </header>
  )
}

export default Navbar