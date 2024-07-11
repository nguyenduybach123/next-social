import Image from "next/image";

function ProfileCard() {
    return (
        <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'>
            <div className='h-20 relative'>
                <Image src='https://images.pexels.com/photos/26613618/pexels-photo-26613618/free-photo-of-thanh-ph-binh-minh-hoang-hon-n-c.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='rounded-md object-cover'/>
                <Image src='https://images.pexels.com/photos/18775833/pexels-photo-18775833/free-photo-of-g-ch-t-ng-la-mau-xanh-la.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={48} height={48} className='rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10'/>
            </div>
            <div className='h-20 flex flex-col gap-2 items-center'>
                <span className='font-semibold'>Edward Gabriel May</span>
                <div className='flex items-center gap-4'>
                    <div className='flex'>
                        <Image src='https://images.pexels.com/photos/18775833/pexels-photo-18775833/free-photo-of-g-ch-t-ng-la-mau-xanh-la.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={48} height={48} className='rounded-full object-cover w-3 h-3'/>
                    </div>
                    <span className='text-xs text-gray-500'>500 Followers</span>
                </div>
                <button className='bg-blue-500 text-white text-xs font-medium p-2 rounded-md'>My Profile</button>
            </div>
        </div>
    );
}

export default ProfileCard;