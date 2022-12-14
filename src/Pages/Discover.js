import { findAllByAltText } from '@testing-library/react';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from '../Components/Image';
import Place from '../Components/Place';
import { useFetch } from '../Hooks/useFetch';



export default function Discover() {
  const [image, setImage] = useState(true)
  const [places, setPlaces] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/places')
  const {data : trips, isPending, error} = useFetch(url, {type: "gen"})
  const[isSelected, setIsSelected] = useState(false)

  const[title, setTitle] = useState()
  const[detail, setDetail] = useState([])


const downhere = useRef(null);

function scroolToSelection(elementRef) {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    })
}


  

  
 const fetchPlaces = useCallback (async () => {
        const response = await fetch(url)
        const json = await response.json()
        setPlaces(json)

    }, [url])

    useEffect(() => {
         fetchPlaces()
      }, [fetchPlaces])


  

function handleChange(e){
  e.preventDefault();
  scroolToSelection(downhere)
  if (e.target.value == "1") {
      setUrl(`http://localhost:3000/places?route=1&route=3`)
      setImage(true)
      setIsSelected(true)
      
    } else if (e.target.value == "2") {
      setUrl(`http://localhost:3000/places?route=2&route=3`)
      setImage(false)
      setIsSelected(true)
      
    } else {
      setUrl(`http://localhost:3000/places?route=1&route=2&route=3`)
      setIsSelected(false)
    }
  }




    return (
      <>
      <div ref={downhere}>
      {isSelected && 
          <div>
            <Image image={image}/>
          </div>  
      }
      </div>

      <div className='grid grid-cols-1 gap-2 place-items-center my-2 object-center'>
        <label className="block text-sm font-medium text-black-900 dark:text-black">Select an option</label>
        <select className= "bg-stone-50 border border-stone-300 text-green-900 text-sm rounded-lg border-green-500 " 
            title={title} onChange={handleChange}>
            <option value="A">All</option>
            <option value="1">Route 1</option>
            <option value="2">Route 2</option>
      </select>
      </div>

    <div className='grid grid-cols-3 gap-4 place-items-stretch'>

      {places.map((place)=>{ 
        return(
        <Place key={place.id} title={place.title} detail={place.detail} src={place.img}/>
        )
      })}
  
    </div>
    

    </>
    );
}


