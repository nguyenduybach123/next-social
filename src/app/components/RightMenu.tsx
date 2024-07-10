import Ad from "./Ad";
import BirthDays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";


type User = {
    id?: string
}

function RightMenu({id}: User) {
    return (
        <div className='flex flex-col gap-6'>
            {
                id ? 
                    (
                        <>
                            <UserInfoCard />
                            <UserMediaCard uid='test' />
                        </>
                    ) : null
            }
            <FriendRequests />
            <BirthDays />
            <Ad size='md' />
        </div>
    );
}

export default RightMenu;