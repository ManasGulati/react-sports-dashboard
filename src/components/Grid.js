import React, { useState } from 'react'
import {all, Motor, Water, Combat, Individual, Team } from '../data.js'
import Card from './Card.js'


function Grid(props) {

    let cat;
    const categoryMap = { all, Motor, Water, Combat, Individual, Team };
    const [liked,update]=useState([]);

    if(props.title==="All Sports"){
        cat=all;
    }else{
        cat=categoryMap[props.title];
    }
    

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {cat.map((data)=>{
                return(
                    <Card key={data.id} id={data.id} liked={liked} update={update} category={data.category} title={data.title} desc={data.desc} img={data.img}></Card>
                );
            })}
            
        </div>
    )
}

export default Grid;
