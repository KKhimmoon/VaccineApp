import Link from "next/link";
import ProductCard from "./ProductCard";
export default async function HospitalCatalog({hosJson}:{hosJson:Object}){
    const hosJsonReady = await hosJson
    return (
        <div style = {{margin : "20px", display: "flex",
        flexDirection : "row", alignContent : "space-around", justifyContent : "space-around",flexWrap : "wrap" ,padding : "10px"}}>
            {
                hosJsonReady.data.map((hosItem:Object) => (
                    <Link href={`/hospital/${hosItem.id}`} className="w-1/5">
                    <ProductCard hospitalName= {hosItem.name} imgSrc = {hosItem.picture}/>
                    </Link>

                ))
            }
        
        
        </div>
    )

}