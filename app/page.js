'use client'
import Feed from "./components/feed/feed";
import Post from "./components/feed/testFeed";


export default function Home() {

  const avatar = 'https://via.placeholder.com/150'

  return (
    
    <>
   <div className="sm:ml-auto pl-52 mt-14 mr-96   ">
      <Feed avatar={avatar}/>


    </div>
    
    
    </>
  )
  
}