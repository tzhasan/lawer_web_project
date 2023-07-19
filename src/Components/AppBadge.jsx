'use client'
import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function AppBadge({ text, children, bg = "bg-gray " }) {
    return (
        <div className={`${bg} p-2 gap-x-2 rounded-full flex flex-row items-center `} >
            {children}
            <Typography color="white" variant="h-6" className="inline-block">{text}</Typography>
            
        </div >
    )
}
