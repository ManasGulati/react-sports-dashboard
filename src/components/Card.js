import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function Card(props) {


    function clickHandler(){
        if (props.liked.includes(props.id)) {
            props.update((prev)=>{
               return prev.filter((id)=>id!==props.id);
            });
            toast.warning("Like removed");
        } else {
            props.update((prev)=>{
                return [...prev, props.id];
            });
            toast.success("Liked successfully");
        }
    }

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='type capitalize text-white text-xl font-bold leading-5 p-4'>{props.category}</div>
            <div className='graphic relative'>
                <div className='img'>
                    <img src={props.img} className='h-[170px] w-full object-cover'/>
                </div>
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button className='like' onClick={clickHandler}>
                        {
                            props.liked.includes(props.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" /> 
                        }
                    </button>
                </div>
            </div>
            <div className='text p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{props.title}</p>
                <p className='mt-2 text-white'>{
                        props.desc.length>100 ? (props.desc.substring(0, 100) + "...") : (props.desc)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;
