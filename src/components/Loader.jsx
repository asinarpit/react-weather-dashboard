import React from 'react'
import "./Loader.css"

export default function Loader() {
  return (
    <div className='fixed w-screen h-screen bg-black/40 top-0 left-0 z-[999] flex justify-center items-center'>
        <span class="loader"></span>
    </div>
  )
}
