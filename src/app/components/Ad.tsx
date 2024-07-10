import cn from "classnames";
import Image from "next/image";

function Ad({size}: {size: "sm" | "md" | "lg"}) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm'>
            {/* TOP */}
            <div className='flex items-center justify-between text-gray-500 font-medium'>
                <span>Sponsored Ads</span>
                <Image src='/more.png' alt='' width={16} height={16} />
            </div>
            {/* BOTTOM */}
            <div className={cn('flex flex-col mt-4',{'gap-2': size === 'sm', 'gap-4': size !== 'sm'})}>
                <div className={cn('relative w-full',{'h-24': size === 'sm', 'h-36': size === 'md', 'h-48': size === 'lg'})}>
                    <Image src='https://images.pexels.com/photos/19227989/pexels-photo-19227989/free-photo-of-thanh-ph-m-c-khach-s-n-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='rounded-lg object-cover' />
                </div>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/19227989/pexels-photo-19227989/free-photo-of-thanh-ph-m-c-khach-s-n-toa-nha.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={24} height={24} className='rounded-full w-6 h-6 object-cover' />
                    <span className='text-blue-500 font-medium'>Big Lounge</span>
                </div>
                <p className={cn({'text-xs': size === 'sm', 'text-sm': size !== 'sm'})}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <button className='bg-gray-200 text-gray-500 p-2 text-xs rounded-lg'>Learn more</button>
            </div>
        </div>
    );
}

export default Ad;