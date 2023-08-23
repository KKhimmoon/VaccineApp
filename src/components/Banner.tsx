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
                <h1>Get yourself <span>vaccinated</span> today</h1>
                <h3>find hospital to book your vaccine</h3>
           </div>    
        </div>
    );
} 