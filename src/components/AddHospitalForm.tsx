import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidatePath } from "next/cache";
export default async function AddHospitalForm() {
    const addHospital = async(addHospitalForm:FormData) => {
        "use server"
        console.log(addHospitalForm)
        const name = addHospitalForm.get("name")
        const address = addHospitalForm.get("address")
        const district = addHospitalForm.get("district")
        const province = addHospitalForm.get("province")
        const postalcode = addHospitalForm.get("postalcode")
        const tel = addHospitalForm.get("tel")
        const picture = addHospitalForm.get("picture")
        try {
            await dbConnect()
            const hospital = await Hospital.create({
                "name": name,
                "address" : address,
                "district" : district,
                "province" : province,
                "postalcode" : postalcode,
                "tel" : tel,
                "picture" : picture
            })
        }catch (error) {
            console.log(error)
        }
        revalidatePath('/hospital')
    }
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) 
        return null
    const profile = await getUserProfile(session.user.token)
    return (
        <div>
             {
            (profile.data.role == "admin")?
            <div className="flex flex-col items-center">
            <form  action = {addHospital} className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-2/4 px-10 py-5">
            <div className="text-xl text-blue-700 font-bold">Hospital Form</div>
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="name">Name </label>
                <input type="text"  required id = "name" name = "name" placeholder="Hospital Name" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>  
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="address">Address</label>
                <input type="text"  required id = "address" name = "address" placeholder="Hospital Address" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>   
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="district">District</label>
                <input type="text"  required id = "district" name = "district" placeholder="District" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>  
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="province">Province</label>
                <input type="text"  required id = "province"  name = "province" placeholder="Province" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div> 
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="postalcode">Postal Code</label>
                <input type="text"  required id = "postalcode" name = "postalcode" placeholder="Postal Code" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div>  
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="tel">Tel.</label>
                <input type="text"  required id = "tel" placeholder="Tel" name = "tel" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div> 
            <div className="flex items-center w-full my-2">
                <label className="block text-gray-700 pr-4 w-1/4 flex items-start" htmlFor="picture">Picture</label>
                <input type="text"  required id = "picture" placeholder="URL" name = "picture" className="w-full bg-white border-2 border-gray-200 rounded  p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
            </div> 
            <button type = "submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Add new hospital</button> 
            </form>
        </div>
        :null
        }
        </div>

    );
}