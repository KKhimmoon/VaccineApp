import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu () {
    return (
        <div className = 'h-12 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row-reverse border-b border-gray-400'>
            <Image src  = {'/img/logo.png'} className = 'h-full w-auto'
            alt="logo" width = {0} height = {0} sizes = "100vh"/>
            <TopMenuItem title= "Booking"  pageRef = "/booking"/>
        </div>
    );

}