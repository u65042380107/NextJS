'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter} from "next/router";
import { usePathname } from 'next/navigation';


export default function navigate() {
  const pathname = usePathname();


  return (
    <>
    <div className='text-center bg-red-500 p-4 font-bold text-3xl'>
        <Link href='/home' className={pathname==='/home'? 'active' : ''}>Home</Link>
          |
        <Link href='/profile' className={pathname==='/profile'? 'active' : ''}>profile</Link>
          |
        <Link href='/about' className={pathname==='/about'? 'active' : ''}>about</Link>
        |
        <Link href='/products' className={pathname==='/products'? 'active' : ''}>product</Link>
    </div>
    <div className='h-10 m-2'>

    </div>

    </>
  )
}
