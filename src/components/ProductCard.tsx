import styles from './productcard.module.css';
import Image from 'next/image';
export default function ProductCard() {
    return(
        <div className= {styles.card}>
            <div className={styles.cardimg}>
                <Image src = {'/img/vaccine1.jpg'}
                    alt = "Vaccine Picture"
                    fill = {true}
                    objectFit = "cover"/>
            </div>
            <div className= {styles.cardtext}>
                <h4 style={{textAlign: 'center' }}>COVID-19 vaccines</h4>
                <ul>
                    <li>mRNA COVID-19 vaccines are highly effective in preventing the most severe outcomes from a COVID-19 infection.</li>
                    <li>COVID-19 vaccines can help prevent you from becoming hospitalized if you do get infected with COVID-19.</li>
                    <li>COVID-19 vaccines can help prevent you from dying if you do get infected with COVID-19.</li>
                </ul>


            </div>
        </div>
    )
}3