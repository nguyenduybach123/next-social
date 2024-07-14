import { auth } from "@clerk/nextjs/server";
import Post from "./Post";
import prisma from "@/lib/client";

async function Feed({username}: {username?: string}) {
 
    const {userId} = auth();

    let posts;

    if(username) {
        posts = await prisma.post.findMany({
            where: {
                user: {
                    username: username
                }
            },
            include: {
                user: true,
                likes: {
                    select: {
                        userId: true
                    }
                },
                _count: {
                    select: {
                        comments: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
    }

    if(!username && userId) {
        const following = await prisma.follower.findMany({
            where: {
                followerId: userId
            },
            select: {
                followingId: true
            }
        });

        const followingIds = [userId, ...following.map(f => f.followingId)];

        posts = await prisma.post.findMany({
            where: {
                userId: {
                    in: followingIds
                }
            },
            include: {
                user: true,
                likes: {
                    select: {
                        userId: true
                    }
                },
                _count: {
                    select: {
                        comments: true
                    }
                }
            },
            orderBy: {
                createdAt: "desc"
            }
        });
    }

    if(!posts) return null;

    return (
        <div className='p-4 bg-white shadow-md rounded-lg flex flex-col gap-12 mt-6'>
            {
                posts.length ? 
                    (
                        posts.map(post => (<Post key={post.id} post={post}  />))   
                    ) 
                    : "No posts found"
            }
        </div>
    );
}

export default Feed;