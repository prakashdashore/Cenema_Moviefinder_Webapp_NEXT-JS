"use client"

import React from 'react'
import Trending from './Trending'
import Upcomming from './Upcomming'
import Footer from './Footer'
import OntvShows from './OnTvShows'

const Group = () => {
  return (
    <>
    <div className='w-[100vw] h-[100vh]'>
        <div className='w-[80vw] min-h-[100vh] mx-auto mt-10 bg-white'>
         <Trending/>
         <Upcomming/>
         <OntvShows/>


       
          

            






        </div>

        <Footer/>
    </div>
    
    </>
  )
}

export default Group