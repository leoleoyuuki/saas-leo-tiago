

import Link from 'next/link'
import React from 'react'
import {LinearGradient as Lg} from 'react-text-gradients'

export default function Header() {
  return (
    <div>
        <header className='flex items-center justify-around h-28'>

            <div className="logo">
                <h1 
                className='h1 font-bold text-3xl'>
                <Lg gradient={["to left", "#6b3fa9 ,#ffffff"]}>
                BoostSync
                </Lg>
                </h1 >
            </div>
            <nav >
                <ul className='text-[#6b3fa9] text-lg flex gap-10 [text-shadow:_3px_3px_8px_rgb(255_255_255_/_50%)]'>
                    <li><Link href={"/"}>item-1</Link></li>
                    <li><Link href={"/"}>item-2</Link></li>
                    <li><Link href={"/"}>item-3</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}