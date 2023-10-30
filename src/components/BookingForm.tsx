"use client"
import DateReserve from "@/components/DateReserve"
import NameReserve from "@/components/NameReserve";
import IDReserve from "@/components/IDReserve";
import dayjs,{Dayjs} from 'dayjs'
import {useState} from "react"
import {useDispatch} from "react-redux"
import {AppDispatch} from "@/redux/store"
import { BookingItem } from "../../interfaces";
import { addBooking } from "@/redux/features/bookSlice";
export default function BookingForm(){

    const dispatch = useDispatch<AppDispatch>()

    const [bookDate,setBookDate] = useState<Dayjs|null>(null)
    const [bookLocation,setBookLocation] =  useState<string>("")
    const [bookfName,setBookfName] = useState<string>("")
    const [booklName,setBooklName] = useState<string>("")
    const [bookIdCard,setBookIdCard] = useState<string>("")

    const makeReservation = () => {
        if(bookDate && bookLocation){
            const item:BookingItem = {
                NameofPatient: bookfName,
                SurnameOfPatient : booklName,
                IdCard : bookIdCard,
                NameofHospital : bookLocation,
                DateReserve: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    return (
           <div>
                <div className = "w-fit space-y-2">
                    <div className="text-md text-left text-gray-600">
                        Your Name</div>
                    <NameReserve onNameChange={(value:string) => {setBookfName(value)}}
                    onSurnameChange = {(value:string) => setBooklName(value)}/>
                    <div className="text-md text-left text-gray-600">
                        Your ID Card</div>
                    <IDReserve onIDChange = {(value:string) => setBookIdCard(value)}/>
                    <div className="text-md text-left text-gray-600">
                        Pick your vaccination Date</div>
                    <DateReserve onDateChange={(value:Dayjs) => {setBookDate(value)}}
                    onLocationChange = {(value:string) => setBookLocation(value)}/>
                    <div className="flex flex-col items-center">
                    <button className="rounded-md bg-sky-600 hover:bg-indigo-400 px-3 py-2 shadow-sm text-white my-5" onClick={makeReservation}>Book your appointment</button>
                    </div>
                     
                    </div>
                       
        
                    
           </div>
    );
}