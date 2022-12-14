import React, { useEffect, useRef, Component, useMemo, useState }  from 'react'
import land from '../img/land.png'

export default function Map() {
   

    

   return (


    <div className="w-full h-full">
        <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Wollman%20Ring+(My%20Business%20Name)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
            </iframe>
    </div>

    
   );
}