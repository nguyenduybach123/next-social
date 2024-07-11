import Image from "next/image";

function AddPost() {

    return (
        <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm mt-6'>
            {/* AVATAR */}
            <Image src='https://images.pexels.com/photos/26752880/pexels-photo-26752880/free-photo-of-gi-c-m-xanh.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' width={48} height={48} className='w-12 h-12 object-cover rounded-full' />
            {/* POST */}
            <div className='flex-1'>
                {/* TEXT INPUT */}
                <form action={''} className='flex gap-4'>
                    <textarea name='desc' id='' className='flex-1 bg-slate-100 rounded-lg p-2' placeholder='What is on your mind ?'></textarea>
                    <Image src='/emoji.png' alt='' width={20} height={20} className='w-5 h-5 cursor-pointer self-end' />
                    <button>Send</button>
                </form>
                {/* POST OPTIONS */}
                <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addimage.png' alt='' width={20} height={20} />
                        Photo
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addVideo.png' alt='' width={20} height={20} />
                        Video
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/poll.png' alt='' width={20} height={20} />
                        Poll
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src='/addevent.png' alt='' width={20} height={20} />
                        Event
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPost;