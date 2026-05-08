import React from 'react'
import {CATEGORIES} from '../data.js'

function Titles(props) {

    function filterHandler(title) {
        props.change(title);
        console.log(title);
    }

    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center"> 
            {CATEGORIES.map((data)=>{
                return(<button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 hover:scale-125 transition-all duration-200
               ${
                props.title === data.label
                  ? "bg-opacity-60 border-white"
                  : "bg-opacity-40 border-transparent"
              }`
            } key={data.id} onClick={() => filterHandler(data.label)}>{data.label}</button>);
            })}
        </div>
    )
}

export default Titles;
