import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({img, profile_img, title, user, game}) => {
  return (
    <div className='p-2'>
       <Image src={img} />
       <div className='flex pt-2'>
        <div className='pr-3'>
            <Image src={profile_img} width={40} height={40} className='rounded-full' />
        </div>
        <div>
          <p className='text-sm font-bold'>{title}</p>
          <p className='text-sm text-gray-500'>{user}</p>
          <p className='text-sm text-gray-500'>{game}</p>
        </div>
       </div>
    </div>
  )
}

export default LiveChannelItem