'use client'
import React from 'react'
import {
    Card,
    Typography,

} from "@material-tailwind/react";
import { currency } from '@/app/utils/config';
import GrayBadge from './AppBadge';
export default function LawyerCard() {
    return (
        <Card className="w-96 mt-6 bg-primary ">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <div className="row-span-3 p-6">
                    <Typography variant="h4" color="white" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography color="white" variant="paragraph">Divorce Specialist</Typography>

                    <GrayBadge text="6 years of experience" />
                    <div className='grid grid-cols-2 gap-4 my-3'>

                        <GrayBadge text={`${currency}200`} />
                        <GrayBadge text="10+ cases" />

                    </div></div>
                <div className="row-span-3 flex self-end rounded-br-lg">
                    <img className='rounded-s-full w-96 h-48 rounded-br-lg'
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="ui/ux review check"
                    />
                </div>
            </div>
        </Card >
    )
}
