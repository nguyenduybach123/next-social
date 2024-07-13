"use client"

import { acceptFollowRequest, declineFollowRequest } from "@/lib/actions";
import { FolloweRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type RequestWithUser = FolloweRequest & {
    sender: User
}

function FriendRequestList({requests}: {requests: RequestWithUser[] }) {
    
    const [requestState, setRequestState] = useState(requests);

    const handlerAcceptFollowRequest = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId);
        try {
            await acceptFollowRequest(userId);
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        }
        catch(err) {
            console.log(err);
        }
    }

    const handlerDeclineFollowRequest = async (requestId: number, userId: string) => {
        removeOptimisticRequest(requestId);
        try {
            await declineFollowRequest(userId);
            setRequestState((prev) => prev.filter((req) => req.id !== requestId));
        }
        catch(err) {
            console.log(err);
        }
    }

    const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
        requestState,
        (state, value: number) => state.filter(req => req.id !== value)
    );
    
    return (
        <div>
            {
                optimisticRequests.map(request => (
                    <div key={request.id} className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <Image src={request.sender.avatar || "/noAvatar.png"} alt='' width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
                            <span className='font-semibold'>{(request.sender.name && request.sender.surname) ? request.sender.name + " " + request.sender.surname : request.sender.username}</span>
                        </div>
                        <div className='flex gap-3 justify-end'>
                            <form action={() => handlerAcceptFollowRequest(request.id, request.sender.id)}>
                                <button>
                                    <Image src='/accept.png' alt='' width={20} height={20} className='cursor-pointer' />
                                </button>
                            </form>
                            <form action={() => handlerDeclineFollowRequest(request.id, request.sender.id)}>
                                <button>
                                    <Image src='/reject.png' alt='' width={20} height={20} className='cursor-pointer' />
                                </button>
                            </form>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default FriendRequestList;