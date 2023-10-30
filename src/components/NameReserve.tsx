'use client'
import {TextField} from '@mui/material'
import {useState} from 'react'
export default function NameReserve({onNameChange,onSurnameChange}
    : {onNameChange:Function,onSurnameChange:Function}) {
        const [reserveName,setReserveName] = useState<string>("")
        const [reserveSurname,setReserveSurname] = useState<string>("")
    return (
        <div className=' bg-slate-100 rounded-lg space-x-5 space-y-0 w-full px-10 py-5 flex flex-row justify-between'>
            <TextField id="fname" label="First Name" variant="standard" required value={reserveName} onChange={(e) => {setReserveName(e.target.value) ; onNameChange(e.target.value)}}/>
            <TextField id="lname" label="Last Name" variant="standard" required value={reserveSurname} onChange={(e) => {setReserveSurname(e.target.value) ; onSurnameChange(e.target.value)}}/>
        </div>
    );
}