'use client'
import {DatePicker} from '@mui/x-date-pickers'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {Select,MenuItem} from '@mui/material'
import {Dayjs} from 'dayjs'
import {useState} from "react"
export default function DateReserve({onDateChange,onLocationChange}: {onDateChange:Function,onLocationChange:Function}) {
    const [reserveDate,setReserveDate] = useState<Dayjs|null>(null)
    const [location,setLocation] = useState<string>("")
    return (
        <div className=' bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center'>
        <LocalizationProvider dateAdapter = {AdapterDayjs}>
            <DatePicker className = "bg-white"
            value={reserveDate}
            onChange={(value) => {setReserveDate(value) ; onDateChange(value)}}
            />
        </LocalizationProvider>
        <Select variant = 'standard' name = "location" id = 'location'  value = {location} onChange = {(e) => {
            setLocation(e.target.value); onLocationChange(e.target.value)
        }}className='h-[2em] w-[200px]' >
            <MenuItem value = "Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
            <MenuItem value = "Rajavithi Hospital">Rajavithi Hospital</MenuItem>
            <MenuItem value = "Thammasat University Hospital">Thammasat University Hospital</MenuItem>
        </Select>
        </div>

    );
}
