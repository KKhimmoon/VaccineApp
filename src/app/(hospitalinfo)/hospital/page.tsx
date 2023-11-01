import CardPanel from "@/components/CardPanel"
import HospitalCatalog from "@/components/HospitalCatalog"
import getHospitals from "@/libs/getHospitals"
import { LinearProgress } from "@mui/material"
import { Suspense } from "react"
import AddHospitalForm from "@/components/AddHospitalForm"


export default function Hospital(){
    const hospitals = getHospitals()
    return(
        <main className="text-center p-5">
            <h1 className="text-xl font-medium"> Select Your Hospital</h1>
            <Suspense fallback = {<p>Loading...<LinearProgress/></p>}>
                <HospitalCatalog hosJson={hospitals}/>
                <AddHospitalForm/>
            </Suspense>

            
        </main>
    )
}