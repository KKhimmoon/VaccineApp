'use client'
import {TextField} from '@mui/material'
export default function NameReserve() {
    return (
        <div className=' bg-slate-100 rounded-lg space-x-5 space-y-0 w-full px-10 py-5 flex flex-row justify-between'>
            <TextField id="fname" label="First Name" variant="standard" required />
            <TextField id="lname" label="Last Name" variant="standard" required />
        </div>
    );
}