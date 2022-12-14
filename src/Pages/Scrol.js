const abi = useRef(null);
const abla = useRef(null);

const scroolToSelection = (elementRef) =>{
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
    })
}


return (

    <div className="bg-slate-800 h-screen w-screen">This is the element we will scroll to</div>
        <button onClick={()=>{scroolToSelection(abi)}}>Scroll to element</button>
        
        <div ref={abi} className=' bg-slate-700 h-screen w-screen"'>
            <p>Abi</p>
        </div>
        <div className=' bg-slate-600 h-screen w-screen"'>
            <p>Abla</p>
)
