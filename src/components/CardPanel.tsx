'use client'
import Link from "next/link";
import  {useReducer} from "react"
import ProductCard from "./ProductCard";
export default function CardPanel(){
    const compareReducer = (compareList: Map<string,number>,action: {type:string, hospitalName:string ,rate :number})=> {
        switch(action.type){
            case "add": {
                return new Map(compareList.set(action.hospitalName,action.rate))
            }
            case "remove": {
                compareList.delete(action.hospitalName)

                return new Map(compareList)
            }
            default: return compareList
        }
    }
        const [compareList,dispatchCompare] = useReducer(compareReducer,new Map<string,number>())
        const mockHosRepo = [{hid: "001",name : "Chulalongkorn Hospital", image : "/img/chula.jpg"},
        {hid: "002",name : "Rajavithi Hospital", image : "/img/rajavithi.jpg"},
        {hid: "003",name : "Thammasat University Hospital", image : "/img/thammasat.jpg"}]
    return (
        <div>
             <div className = 'm-5 flex flex-row  flex-wrap justify-around content-around'>
            {
                   mockHosRepo.map((hosItem) => (
                    <Link href={`/hospital/${hosItem.hid}`} className="w-1/5">
                    <ProductCard hospitalName= {hosItem.name} imgSrc = {hosItem.image} rate = {compareList.get(hosItem.name)||0}
                    onCompare={(hospital:string, rate:number) => dispatchCompare({type : "add", hospitalName:hospital,rate:rate})} />
                    </Link>
                    
                ))
            }
             
            </div>
                {Array.from(compareList).map((hospital)=><div key = {hospital[0]} onClick={ () =>
                dispatchCompare({type: "remove", hospitalName:hospital[0], rate: 0})}>{hospital[0]} Rating = {hospital[1]}</div> 
                )}
        </div>
      
    );
}