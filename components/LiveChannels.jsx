import React from 'react'
import LiveChannelItem from './LiveChannelItem'
import Live1 from '../public/assets/live/live1.jpeg';
import Live2 from '../public/assets/live/live2.jpeg';
import Live3 from '../public/assets/live/live3.jpeg';
import Live4 from '../public/assets/live/live4.jpeg';
import Live5 from '../public/assets/live/live5.jpeg';
import Live6 from '../public/assets/live/live6.jpeg';
import Live7 from '../public/assets/live/live7.jpeg';
import Live8 from '../public/assets/live/live8.jpeg';
import Live9 from '../public/assets/live/live9.jpeg';
import Live10 from '../public/assets/live/live10.jpeg';

const LiveChannels = () => {
  return (
    <div id='live' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
            <span className='text-[#9147ff]'>Live Channels </span> 
            we think you'll like</h2>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
            <LiveChannelItem
              img={Live1}
              profile_img='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
              title='CHARITY STREAM! Any support is ap...'
              user='Natt'
              game='Valorant'
            />
            <LiveChannelItem
          img={Live2}
          profile_img='https://images.pexels.com/photos/10273454/pexels-photo-10273454.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='Deployable shield commin in clutch'
          user='50ZINT'
          game='Call of Duty: Warzone'
        />
        <LiveChannelItem
          img={Live3}
          profile_img='https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408'
          title='VALORANT WITH NIJI AND FRIENDS!...'
          user='baoo'
          game='Valorant'
        />
        <LiveChannelItem
          img={Live4}
          profile_img='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='Local Streamer stuck in a cave: sings...'
          user='Jerma985'
          game='One Hand Clapping'
        />
        <LiveChannelItem
          img={Live5}
          profile_img='https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1'
          title='BIG Mario Kart session'
          user='Bigpuffer'
          game='Mario Kart 8 Deluxe'
        />
        <LiveChannelItem
          img={Live6}
          profile_img='https://images.pexels.com/photos/3775168/pexels-photo-3775168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Tripod Man Gains RP | Code: MFAM | @...'
          user='NICKMERCS'
          game='Apex Legends'
        />
        <LiveChannelItem
          img={Live7}
          profile_img='https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600'
          title='JESUS LOVES YOU!!!'
          user='coletteleclair'
          game='Just Chatting'
        />
        <LiveChannelItem
          img={Live8}
          profile_img='https://static-cdn.jtvnw.net/jtv_user_pictures/b3fc1f16-0818-4121-8711-c31b9469bc21-profile_image-50x50.png'
          title='Covert_Muffin teaching Star Wars...'
          user='JamesDoneQuick'
          game='Star Wars: Jedi Knight II - Jedi Outcast'
        />
        <LiveChannelItem
          img={Live9}
          profile_img='https://images.pexels.com/photos/4098157/pexels-photo-4098157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='Grinding'
          user='shroud'
          game='The Cycle: Frontier'
        />
        <LiveChannelItem
          img={Live10}
          profile_img='https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          title='GRILLIN / CHILLEN! Steak / Burgers...'
          user='KennyGoodloe'
          game='Just Chatting'
        />
        </div>
    </div>
  )
}

export default LiveChannels