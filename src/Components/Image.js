import React from 'react'
import route1 from '../img/route1.png'
import route2 from '../img/route2.png'

export default function Image(props) {




  return (

    <div>
       {props.image && 
            <img className='flex mt-3 mx-auto my-auto shadow shadow-blue-500/40 w-1/2' src={route1} />
        }

        {!props.image && 
            <img className='flex mt-3 mx-auto my-auto shadow shadow-blue-500/40 place-content-center w-3/5' src={route2} />
        }
    </div>

  )
}
