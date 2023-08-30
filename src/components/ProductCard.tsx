import styles from './productcard.module.css';
import Image from 'next/image';
export default function ProductCard({ hospitalName, imgSrc}:{hospitalName:string, imgSrc:string}) {
    return(
        <div className= "w-1/5 h-[300px] rounded-lg shodow-lg">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src = {imgSrc}
                    alt = "Product Picture"
                    fill = {true}
                    className = "object-cover rounded-t-lg"/>
            </div>
            <div className= "w-full h-[30%] p-[10px]">{hospitalName}</div>
        </div>
    )
}