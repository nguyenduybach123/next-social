"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";
import { z } from "zod";

export const switchFollow = async (uid: string) => {
    const {userId:currentUserId} = auth();

    if(!currentUserId){
        throw new Error("User is not authenticated");
    }

    try{
        const existingFollow = await prisma.follower.findFirst({
            where: {
                followerId: currentUserId,
                followingId: uid
            }
        });

        if(existingFollow) {
            await prisma.follower.delete({
                where: {
                    id: existingFollow.id
                }
            });
        }
        else {
            const existingFollowRequest = await prisma.followeRequest.findFirst({
                where: {
                    senderId: currentUserId,
                    receiverId: uid
                }
            })

            if(existingFollowRequest) {
                await prisma.followeRequest.delete({
                    where: {
                        id: existingFollowRequest.id
                    }
                });
            }
            else {
                await prisma.followeRequest.create({
                    data: {
                        senderId: currentUserId,
                        receiverId: uid
                    }
                })
            }
        }
    }
    catch(err) {
        console.log(err);
        throw new Error("Something went wrong");
    }
}


export const switchBlock = async (uid: string) => {
    const {userId: currentUserId} = auth();

    if(!currentUserId) {
        throw new Error("User is not Authenticated !");
    }

    try {
        const existingBlock = await prisma.block.findFirst({
            where: {
                blockerId: currentUserId,
                blockedId: uid
            }
        });

        if(existingBlock) {
            await prisma.block.delete({
                where: {
                    id: existingBlock.id
                }
            });
        }
        else {
            await prisma.block.create({
                data: {
                    blockerId: currentUserId,
                    blockedId: uid
                }
            });
        }
    }
    catch(err) {
        console.log(err);
        throw new Error("Something went wrong !");
    }
}

export const acceptFollowRequest = async (uid: string) => {
    const {userId: currentUserId} = auth();

    if(!currentUserId) {
        throw new Error("User is not Authenticated!!");
    }

    try {
        const existingFollowRequest = await prisma.followeRequest.findFirst({
            where: {
                senderId: uid,
                receiverId: currentUserId
            }
        });
    
        if(existingFollowRequest) {
            await prisma.followeRequest.delete({
                where: {
                    id: existingFollowRequest.id
                }
            });
    
            await prisma.follower.create({
                data: {
                    followerId: uid,
                    followingId: currentUserId
                }
            });
        }
    }
    catch(err) {
        console.log(err);
        throw new Error("Something went wrong");
    }
}


export const declineFollowRequest = async (uid: string) => {
    const {userId: currentUserId} = auth();

    if(!currentUserId) {
        throw new Error("User is not Authenticated!!");
    }

    try {
        const existingFollowRequest = await prisma.followeRequest.findFirst({
            where: {
                senderId: uid,
                receiverId: currentUserId
            }
        });
    
        if(existingFollowRequest) {
            await prisma.followeRequest.delete({
                where: {
                    id: existingFollowRequest.id
                }
            });
        }
    }
    catch(err) {
        console.log(err);
        throw new Error("Something went wrong");
    }
}

export const updateProfile = async (formData: FormData) => {
    const fields = Object.fromEntries(formData);

    const filteredFields = Object.fromEntries(
        Object.entries(fields).filter(([_, value]) => value !== "")
    );

    const Profile = z.object({
        cover: z.string().optional(),
        name: z.string().max(60).optional(),
        surname: z.string().max(60).optional(),
        description: z.string().max(255).optional(),
        city: z.string().max(60).optional(),
        school: z.string().max(60).optional(),
        work: z.string().max(60).optional(),
        website: z.string().max(60).optional()
    });

    const validatedFields = Profile.safeParse(filteredFields);
    
    if(!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return "error";
    }

    const {userId} = auth();

    if(!userId) return "error";

    try {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: validatedFields.data
        });
    }
    catch(err) {
        console.log(err);
    }
}