import cn from "classnames";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


function Navbar() {
    return (
        <div className={cn('h-24 flex items-center justify-between')}>
            <div className={cn('md:hidden lg:block w-[20%]')}>
                <Link href='/' className={cn('font-bold text-xl text-blue-600')}>CORN SOCIAL</Link>
            </div>
            <div className={cn('hidden md:flex w-[50%] text-sm items-center justify-between')}>
                <div className={cn('flex gap-6 text-gray-600')}>
                    <Link href='/' className={cn('flex items-center gap-2')}>
                        <Image src='/home.png' alt='Homepage' width={16} height={16} className={cn('w-4 h-4')} />
                        <span>Homepage</span>
                    </Link>
                    <Link href='/' className={cn('flex items-center gap-2')}>
                        <Image src='/friends.png' alt='Homepage' width={16} height={16} className={cn('w-4 h-4')} />
                        <span>Friends</span>
                    </Link>
                    <Link href='/' className={cn('flex items-center gap-2')}>
                        <Image src='/stories.png' alt='Homepage' width={16} height={16} className={cn('w-4 h-4')} />
                        <span>Stories</span>
                    </Link>
                </div>
                <div className='hidden xl:flex p-2 bg-slate-100 items-center rounded-xl'>
                    <input type='text' placeholder='search...' className='bg-transparent outline-none' />
                    <Image src='/search.png' alt='search' width={14} height={14} />
                </div>
            </div>
            <div className={cn('w-[30%] flex items-center justify-end gap-4 xl:gap-8')}>
                <ClerkLoading>
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                            Loading...
                        </span>
                    </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className='cursor-pointer'>
                            <Image src='/people.png' alt="" width={24} height={24} /> 
                        </div>
                        <div className='cursor-pointer'>
                            <Image src='/messages.png' alt="" width={20} height={20} /> 
                        </div>
                        <div className='cursor-pointer'>
                            <Image src='/notifications.png' alt="" width={20} height={20} /> 
                        </div>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className='cursor-pointer flex items-center gap-2 text-sm'>
                            <Image src='/login.png' alt="" width={20} height={20} /> 
                            <Link href='/sign-in'>Login / Register</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>
        </div>
    );
}

export default Navbar;