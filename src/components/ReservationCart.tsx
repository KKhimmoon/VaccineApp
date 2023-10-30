"use client"
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function ReservationCart(){
    const hospitalItems = useAppSelector((state) => state.bookSlice.hospitalItems)
    const dispatch = useDispatch<AppDispatch>()
    if (hospitalItems.length === 0) {
        return <div className=" text-2xl font-bold px-5 mx-5 py-2 my-2 flex flex-col items-center">"No Vaccine Booking"</div>; 
    }
    return (
        <>
        {
            hospitalItems.map((reserveItems) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2">
                    <div className="text-xl font-bold"> Name: <span className="font-medium">{reserveItems.NameofPatient} {reserveItems.SurnameOfPatient}</span></div>
                    <div className="text-xl font-bold"> Date : <span className="font-medium">{reserveItems.DateReserve}</span></div>
                    <div className="text-xl font-bold"> ID Card : <span className="font-medium">{reserveItems.IdCard}</span></div>
                    <div className= "text-xl font-bold"> Hospital : <span className="font-medium">{reserveItems.NameofHospital}</span></div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1 text-white shadow-sm my-2.5" onClick={() => dispatch(removeBooking(reserveItems))}>Remove from booking</button>
                </div>
            ))
        }
        </>
    )
}