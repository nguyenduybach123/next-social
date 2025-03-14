import { User } from "@prisma/client";
import Ad from "../Ad";
import BirthDays from "./BirthDays";
import FriendRequests from "./FriendRequests";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import { Suspense } from "react";



function RightMenu({user}: {user?: User}) {
    return (
        <div className='flex flex-col gap-6'>
            {
                user ? 
                    (
                        <>
                            <Suspense fallback='loading...'>
                                <UserInfoCard user={user}/>
                            </Suspense>
                            <Suspense fallback='loading...'>
                                <UserMediaCard user={user} />
                            </Suspense>
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