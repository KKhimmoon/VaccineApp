'use client'
import {TextField} from '@mui/material'
export default function IDReserve() {
    return (
        <div className=' bg-slate-100 rounded-lg space-x-5 space-y-2 w-full px-10 py-5 flex flex-row justify-start'>
            <TextField id="idnum" label="ID Number" variant="standard" required className='w-full' />
        </div>
    );
}