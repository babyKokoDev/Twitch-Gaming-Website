import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({img, profile_img, title, user, game}) => {
  return (
    <div className='p-2'>
       <Image src={img} />
       <div>
        <div>
            <Image src={profile_img} width={60} height={60} className='rounded-full' />
        </div>
       </div>
    </div>
  )
}

export default LiveChannelItem