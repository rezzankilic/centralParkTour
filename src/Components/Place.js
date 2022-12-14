import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Read from './Read'


export default function Place({title, detail, src}) {


    

  return (
    
    <div className="py-8 px-8 max-w-sm m-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={src} alt="Woman's Face" />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          {title}
        </p>
        <p className="text-slate-500 font-medium">
         {detail.substring(0,15)}... 
        </p>
      </div>

      <Read title={title} detail={detail} src={src}/>
      
      
    </div>
  </div>
  )
}
