
import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";
import Image from "next/image";


function ProfilePage() {
    return (
        <div className='h-screen flex gap-6 pt-6'>
            <div className='hidden xl:block w-[20%]'>
                <LeftMenu type='profile' />
            </div>
            <div className='w-full lg:w-[70%] xl:w-[50%]'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-full h-64 relative'>
                        <Image src='https://images.pexels.com/photos/27001556/pexels-photo-27001556/free-photo-of-anh-sang-den-va-tr-ng-thanh-ph-d-ng.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' fill className='rounded-md object-cover' />
                        <Image src='https://images.pexels.com/photos/27027515/pexels-photo-27027515/free-photo-of-den-va-tr-ng-phong-c-nh-dan-ong-nh-ng-ng-i.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt='' width={128} height={128} className='w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover' />
                    </div>
                    <h1 className='mt-20 mb-4 text-2xl font-medium'>Elva Weaver</h1>
                    <div className='flex items-center justify-center gap-12 mb-4'>
                        <div className='flex flex-col items-center'>
                            <span className='font-semibold'>123</span>
                            <span className='text-sm'>Posts</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='font-semibold'>1.2K</span>
                            <span className='text-sm'>Followers</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='font-semibold'>1.3K</span>
                            <span className='text-sm'>Following</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block w-[30%]'>
                <RightMenu id='test' />
            </div>
        </div>
    );
}

export default ProfilePage;