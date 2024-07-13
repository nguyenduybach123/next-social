import AddPost from "./components/AddPost"
import Feed from "./components/feed/Feed"
import LeftMenu from "./components/leftMenu/LeftMenu"
import RightMenu from "./components/rightMenu/RightMenu"
import Stories from "./components/Stories"

const Homepage = () => {
  return (
    <div className='h-screen flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'>
        <LeftMenu type='home' />
      </div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <Stories />
        <AddPost />
        <Feed />
      </div>
      <div className='hidden lg:block w-[30%]'>
        <RightMenu />
      </div>
    </div>
  )
}

export default Homepage