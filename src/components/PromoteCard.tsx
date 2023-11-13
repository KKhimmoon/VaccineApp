"use client"
import { VideoPlayer } from "./VideoPlayer"
import {useState} from "react"
import { useWindowListener } from "@/hooks/useWindowListener"
export function PromoteCard(){
    const [playing,setPlaying] =useState(true)
    useWindowListener("contextmenu",(e) => {e.preventDefault()}  )
    return (
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 round-lg bg-gray-200 flex flex-row ">
            <VideoPlayer isPlaying = {playing} vdoSrc = "/video/getvaccine.mp4"></VideoPlayer>
            <div className="m-5 ">Get your vaccine today
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-400 px-3 py-2 shadow-sm text-white absolute" onClick={ () =>{setPlaying(!playing)}}>
            {playing? "Pause":"Play"}
            </button>
            </div>
        </div>
    )
}