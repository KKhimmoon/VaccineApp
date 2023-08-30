import styles from './banner.module.css'
import Image from 'next/image'
export default function Banner () {
    return (
        <div className = {styles.banner}>
            <Image src = { '/img/cover1.png'}
             alt = "cover"
             fill = {true}
             objectFit = 'cover'
            />
            <div className = {styles.bannerText}>
                <h1 className = 'text-4xl font-semibold '>Get yourself <span>vaccinated</span> today</h1>
                <h3 className = 'text-2xl font-medium'>find hospital to book your vaccine</h3>
           </div>    
        </div>
    );
} 