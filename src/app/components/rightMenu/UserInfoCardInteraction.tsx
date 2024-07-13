"use client"
import { switchBlock, switchFollow } from "@/lib/actions"
import { useOptimistic, useState } from "react"

function UserInfoCardInteraction({
    uid,
    isUserBlocked,
    isFollowing,
    isFollowingSent 
}:{
    uid: string
    isUserBlocked: boolean
    isFollowing: boolean
    isFollowingSent: boolean
}) {

    const [userState, setUserState] = useState({
        following: isFollowing,
        blocked: isUserBlocked,
        followingRequestSent: isFollowingSent
    });

    const handlerFollow = async () => {
        switchOptimisticState("follow");
        try {
            await switchFollow(uid);
            setUserState(prev => ({
                ...prev,
                following: false,
                followingRequestSent: !prev.following && !prev.followingRequestSent ? true : false
            }));
        }
        catch(err) {
            console.log(err);
        }
    }

    const handlerBlock = async () => {
        switchOptimisticState("block");
        try {
            await switchBlock(uid);
            setUserState(prev => ({
                ...prev,
                blocked: !prev.blocked
            }));
        }
        catch(err) {
            console.log(err);
        }
    } 

    const [optimisticState, switchOptimisticState] = useOptimistic(
        userState, 
        (state, value: "follow" | "block") => 
            value === "follow" 
                ? {
                    ...state,
                    following: state.following && false,
                    followingRequestSent: !state.following && !state.followingRequestSent ? true : false
                } : 
                {
                    ...state,
                    blocked: !state.blocked
                }
    );

    return (
        <>  
            <form action={handlerFollow} className='px-2'>
                <button className='w-full bg-blue-500 text-white text-sm rounded-md p-2'>
                    {userState.following ? "Following" : userState.followingRequestSent ? "Friend Request Sent" : "Follow"}
                </button>
            </form> 
            <form action={handlerBlock} className='self-end'>
                <button>
                    <span className='text-red-400 text-xs cursor-pointer'>
                        {userState.blocked ? "Unblock User" : "Block User"}
                    </span>
                </button>
            </form> 
        </>
    );
}

export default UserInfoCardInteraction;