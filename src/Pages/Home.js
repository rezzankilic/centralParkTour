import React from 'react'
import { FaBiking } from 'react-icons/fa';
import land from '../img/land.png';
import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate()
    
    function handleClick(e) {
        e.preventDefault();
        navigate('/map')
    } 

    const location = useLocation()
    
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:165,left:0, behavior: "smooth"})
        }
    }, [location,])
  


  return (
    <div className=' relative bg-stone-100 h-full w-full'>
        <div className=' sticky top-5 pt-7 '>
            <h1 className='text-4xl text-green-600 font-mono font-extrabold text-center'>Central Park</h1>
        </div>

        <div className='relative'>
            <img className='object-fill h-screen w-screen rounded-lg mt-8  opacity-50' src={land} alt='Land' />
            <button className="absolute top- bg-green-500 hover:bg-green-700 text-stone-100 text-4xl font-bold py-2 px-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            onClick={handleClick}>
                Tour Now
            </button>
        </div>
    </div>
  )
}


