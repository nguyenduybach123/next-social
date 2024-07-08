import cn from "classnames";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
    return (
        <div className={cn('h-24 flex items-center justify-between')}>
            <div className={cn('md:hidden lg:block w-[20%]')}>
                <Link href='/' className={cn('font-bold text-xl text-blue-600')}>CORN SOCIAL</Link>
            </div>
            <div className={cn('hidden md:flex w-[50%] text-sm')}>
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
            </div>
            <div className={cn('w-[30%] flex items-center justify-end gap-4 xl:gap-8')}>
                <MobileMenu />
            </div>
        </div>
    );
}

export default Navbar;