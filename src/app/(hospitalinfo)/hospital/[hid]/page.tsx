import getHospital from "@/libs/getHospital"
import Image from "next/image"

export default  async function HospitalDetailPage({params}: {params: {hid:string}}){
    const HospitalDetail = await getHospital(params.hid)
   /*
    const mockHospitalRepo = new Map()
    mockHospitalRepo.set("001",{name:"Chulalongkorn Hospital",image : "/img/chula.jpg"})
    mockHospitalRepo.set("002",{name:"Rajavithi Hospital",image : "/img/rajavithi.jpg"})
    mockHospitalRepo.set("003",{name:"Thammasat University Hospital",image : "/img/thammasat.jpg"})
    */
    return (
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{HospitalDetail.data.name}</h1>
            <div className="flex flex-row my-5">
            <Image src = {HospitalDetail.data.picture}
             alt = "Hospital Picture"
             width = {0} height = {0} sizes = "100vw"
             className="rounded-lg w-[30%] bg-black"/>
             <div className = "text-md mx-5 text-left">{HospitalDetail.data.name}
             <div>Address : {HospitalDetail.data.address}, {HospitalDetail.data.district}, {HospitalDetail.data.province} {HospitalDetail.data.postalcode}</div>
             <div>Tel : {HospitalDetail.data.tel}</div>
             
             </div>
            </div>
        </main>
    )
}
export async function generateStaticParams(){
    return [{hid:"001"},{hid:"002"},{hid:"003"}]
}