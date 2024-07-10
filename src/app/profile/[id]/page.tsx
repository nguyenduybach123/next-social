import LeftMenu from "@/app/components/LeftMenu";
import RightMenu from "@/app/components/RightMenu";


function ProfilePage() {
    return (
        <div className='h-screen flex gap-6 pt-6'>
            <div className='hidden xl:block w-[20%]'>
                <LeftMenu />
            </div>
            <div className='w-full lg:w-[70%] xl:w-[50%]'>
                
            </div>
            <div className='hidden lg:block w-[30%]'>
                <RightMenu id='test' />
            </div>
        </div>
    );
}

export default ProfilePage;