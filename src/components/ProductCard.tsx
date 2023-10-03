"use client"
import InteractiveCard from './InteractiveCard';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import {useState} from "react";
import * as React from "react";
export default function ProductCard({ hospitalName, imgSrc, rate, onCompare}:{hospitalName:string, imgSrc:string,rate :number ,onCompare:Function}) {
    const [value, setValue] = React.useState<number | null>(0);
    return(
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src = {imgSrc}
                    alt = "Product Picture"
                    fill = {true}
                    className = "object-cover rounded-t-lg"/>
            </div>
            <div className= "w-full h-[15%] p-[10px]">{hospitalName}</div>   
                <Rating className='h-[10%] mx-2 px-1 py-1'
                    name="simple-controlled"
                    value={rate}
                    onChange={(event, newValue) => {setValue(newValue || 0);event.stopPropagation(); onCompare(hospitalName,newValue)}}
                    onClick={(e) => {
                        e.stopPropagation();
                      }}
                />
        </InteractiveCard>
    )
}