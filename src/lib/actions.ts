"use server"

import { auth } from "@clerk/nextjs/server"
import prisma from "./client";
import { z } from "zod";
import { revalidatePath } from "next/cache";

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

export const updateProfile = async (prevState: {success: boolean, error: boolean}, payload: {formData: FormData, cover:string}) => {
    
    const {formData, cover} = payload;
    
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

    const validatedFields = Profile.safeParse({cover, ...filteredFields});
    
    if(!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {success: false, error: true};
    }

    const {userId} = auth();

    if(!userId) return {success: false, error: true};

    try {
        await prisma.user.update({
            where: {
                id: userId
            },
            data: validatedFields.data
        });
        return {success: true, error: false};
    }
    catch(err) {
        console.log(err);
        return {success: false, error: true};
    }
}

export const switchLike = async (postId: number) => {
    const {userId} = auth();

    if (!userId) throw new Error("User is not authenticated");

    try {
        const existingLike = await prisma.like.findFirst({
            where: {
                postId: postId,
                userId: userId
            }
        });

        if(existingLike) {
            await prisma.like.delete({
                where: {
                    id: existingLike.id
                }
            });
        }
        else {
            await prisma.like.create({
                data: {
                    postId: postId,
                    userId: userId
                }

            });
        }
    }
    catch(err) {
        console.log(err);
        throw new Error("Something went wrong");
    }

}


export const addComment = async (postId: number, desc: string) => {
    const {userId} = auth();

    if (!userId) throw new Error("User is not authenticated");

    
    try {
        const createComment = await prisma.comment.create({
            data: {
                desc,
                userId,
                postId
            },
            include: {
                user: true
            }
        }); 
        return createComment;
    }
    catch(err) {
        console.log(err);
        throw new Error("Something went wrong");
    }
}

export const addPost = async (formData: FormData, img: string) => {
    const desc = formData.get("desc") as string;
    const Desc = z.string().min(1).max(255);
    const validatedDesc = Desc.safeParse(desc);

    if(!validatedDesc.success) {
        console.log("Description is not valid");
        return;
    }

    const { userId } = auth();  

    if (!userId) throw new Error("User is not authenticated");


    try {
        await prisma.post.create({
            data: {
                desc: validatedDesc.data,
                userId,
                img
            }
        });

        revalidatePath("/");
    }
    catch(err) {
        console.log(err);
        return;
    }

}

export const addStory = async (img: string) => {
    const { userId } = auth();  

    if (!userId) throw new Error("User is not authenticated");

    try {

        const existingStory = await prisma.story.findFirst({
            where: {
                userId
            }
        });

        if(existingStory) {
            await prisma.story.delete({
                where: {
                    id: existingStory.id
                }
            });
        }

        
        const createdStory = await prisma.story.create({
            data: {
                userId,
                img,
                expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000)
            },
            include: {
                user: true
            }
        }); 
        
        return createdStory;
    }
    catch(err) {
        console.log(err);
        return;
    }

}


export const deletePost = async (postId: number) => {
    const { userId } = auth();
    
    if(!userId) throw new Error("User is not authenticated !");

    try {
        await prisma.post.delete({
            where: {
                id: postId,
                userId
            }
        });

        revalidatePath("/");
    }
    catch(err) {
        console.log(err);
    }
}
