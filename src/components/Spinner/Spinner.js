import React from 'react'
import PropagateLoader from "react-spinners/PropagateLoader";
import './Spinner.scss'

function Spinner() {
    return (
        <div className="spinner">
            {<PropagateLoader 
            color="#FFFFFF"
            size={15}
            speedMultiplier={1}
            />}
        </div>
    )
}

export default Spinner;