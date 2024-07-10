import Image from "next/image";
import Link from "next/link";

function UserMediaCard({uid}: {uid: string}) {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col'>
            {/* TOP */}
            <div className='flex justify-between items-center font-medium'>
                <span className='text-gray-500'>User Media</span>
                <Link href='/' className='text-blue-500 text-xs'>See all</Link>
            </div>
            {/* BOTTOM */}
            <div className='flex gap-4 justify-between flex-wrap'>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
                <div className='relative w-1/5 h-24'>
                    <Image src='https://images.pexels.com/photos/16386723/pexels-photo-16386723/free-photo-of-gizeh-ai-c-p.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='object-cover rounded-md' />
                </div>
            </div>
        </div>
    );
}

export default UserMediaCard;