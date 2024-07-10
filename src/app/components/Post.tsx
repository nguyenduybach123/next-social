import Image from "next/image";
import Comments from "./Comments";

function Post() {
    return (
        <div className='flex flex-col gap-4 my-4'>
            {/* USER */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Image src='https://images.pexels.com/photos/26771975/pexels-photo-26771975/free-photo-of-bi-n-binh-minh-hoang-hon-b-bi-n.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load' alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                    <span className='font-medium'>JACK 97</span>
                </div>
                <Image src='/more.png' alt='' width={16} height={16}/>
            </div>
            {/* DESC */}
            <div className='flex flex-col gap-4'>
                <div className='w-full min-h-96 relative'>
                    <Image src='https://images.pexels.com/photos/20988789/pexels-photo-20988789/free-photo-of-ca-phe-u-ng-ban-g.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load' alt='' fill className='object-cover rounded-md'/>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quo aperiam nostrum expedita. Corrupti, libero atque cumque cum molestiae voluptates sit nam, inventore ipsam id obcaecati odio, quasi eos explicabo perferendis!
                </p>
            </div>
            {/* INTERACTION */}
            <div className='flex items-center justify-between text-sm'>
                <div className='flex items-center gap-4'>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                            <Image src='/like.png' alt='' width={16} height={16} className='cursor-pointer' />
                            <span className='text-gray-300'> | </span>
                            <span className='text-gray-500'>123 <span className='hidden md:inline'>Likes</span></span>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                            <Image src='/comment.png' alt='' width={16} height={16} className='cursor-pointer' />
                            <span className='text-gray-300'> | </span>
                            <span className='text-gray-500'>123 <span className='hidden md:inline'>Comments</span></span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-4 bg-slate-100 p-2 rounded-xl'>
                        <Image src='/share.png' alt='' width={16} height={16} className='cursor-pointer' />
                        <span className='text-gray-300'> | </span>
                        <span className='text-gray-500'>123 <span className='hidden md:inline'>Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments />
        </div>
    );
}

export default Post;