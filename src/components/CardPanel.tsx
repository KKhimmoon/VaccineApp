'use client'
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
    return (
        <div>
             <div className = 'm-5 flex flex-row flex-row flex-wrap justify-around content-around'>
                <ProductCard hospitalName='Chulalongkorn Hospital' imgSrc = '/img/chula.jpg' rate = {compareList.get('Chulalongkorn Hospital')||0}
                onCompare={(hospital:string, rate:number) => dispatchCompare({type : "add", hospitalName:hospital,rate:rate})}/>
                <ProductCard hospitalName='Rajavithi Hospital' imgSrc = '/img/rajavithi.jpg' rate = {compareList.get('Rajavithi Hospital')||0}
                onCompare={(hospital:string, rate:number) => dispatchCompare({type : "add", hospitalName:hospital,rate:rate})}/>
                <ProductCard hospitalName='Thammasat University Hospital' imgSrc = '/img/thammasat.jpg' rate = {compareList.get('Thammasat University Hospital')||0}
                onCompare={(hospital:string, rate:number) => dispatchCompare({type : "add", hospitalName:hospital,rate:rate})}/>
            </div>
                {Array.from(compareList).map((hospital)=><div key = {hospital[0]} onClick={ () =>
                dispatchCompare({type: "remove", hospitalName:hospital[0], rate: 0})}>{hospital[0]} Rating = {hospital[1]}</div>)}
        </div>
      
    );
}