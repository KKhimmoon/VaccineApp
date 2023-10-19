import DateReserve from "@/components/DateReserve"
import NameReserve from "@/components/NameReserve";
import IDReserve from "@/components/IDReserve";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
export default async function Booking(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null
    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);
    return (
        <main className = 'w-[100%] flex flex-col items-center space-y-4'>
            <div className="text-xl font-medium">Booking</div>
            <div className=" bg-slate-100 m-5 p-5">
            <table className="table-auto border-separate border-spacing-2">
                <tbody>
                    <tr><td>Name</td><td>{profile.data.name}</td></tr>
                    <tr><td>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
            </div>
           
            <div className = "w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Your Name</div>
                <NameReserve/>
                <div className="text-md text-left text-gray-600">
                    Your ID Card</div>
                <IDReserve/>
                <div className="text-md text-left text-gray-600">
                    Pick your vaccination Date</div>
                <DateReserve/>
                </div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-400 px-3 py-2 shadow-sm text-white">Book your appointment</button>

            
        </main>
    );
}