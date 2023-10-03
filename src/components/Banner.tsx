"use client"
import {useState} from "react";
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from "next/navigation";
export default function Banner () {
    const covers = ['/img/banner1.jpg','/img/banner2.jpg','/img/banner3.jpg','/img/banner4.jpg']
    const [index,setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className = {styles.banner} onClick = {()=> setIndex(index+1)}>
            <Image src = { covers[index%4]}
             alt = "cover"
             fill = {true}
             objectFit = 'cover'
            />
            <div className = {styles.bannerText}>
                <h1 className = 'text-4xl font-semibold '>Get yourself <span>vaccinated</span> today</h1>
                <h3 className = 'text-2xl font-medium'>find hospital to book your vaccine</h3>
           </div>
           <button className= "bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
           onClick={ (e) =>{ e.stopPropagation(); router.push('/hospital')}}>
            Select Your Hospital
            </button>    
        </div>
    );
} 