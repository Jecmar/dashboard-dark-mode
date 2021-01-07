import React,{useRef} from 'react';
import './switch.css';

function Switch({setdarkMode, checked, setchecked}){    
    const ref = useRef(null)
    function handleChange(){
        setchecked(ref.current.checked)
        setdarkMode(ref.current.checked)
    }


    return(
        <div className="dark-mode">
            <p className="dark-mode-title">
                Dark Mode
            </p>
            <input ref={ref} onChange={handleChange} type="checkbox" checked={checked} className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    )
}

export default Switch