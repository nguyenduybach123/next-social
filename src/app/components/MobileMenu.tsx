"use client"

import cn from "classnames";
import Link from "next/link";
import { useState } from "react";

function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='sm:block md:hidden'>
            <div className={cn('flex flex-col gap-[4.5] cursor-pointer')} onClick={() => setIsOpen(prev => !prev)}>
                <div className={cn('w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500',{'rotate-45': isOpen})}></div>
                <div className={cn('w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-500',{'opacity-0': isOpen})}></div>
                <div className={cn('w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-500',{'-rotate-45': isOpen})}></div>
            </div>
            {
                isOpen && 
                    <div className={cn('absolute left-0 top-24 w-full h-full bg-white flex flex-col items-center justify-center gap-8 font-bold text-xl z-10')}>
                        <Link href='/'>Home</Link>
                        <Link href='/'>Friends</Link>
                        <Link href='/'>Groups</Link>
                        <Link href='/'>Stories</Link>
                        <Link href='/'>Login</Link>
                    </div>
            }
        </div>
    );
}

export default MobileMenu;