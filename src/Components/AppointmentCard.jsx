'use client'
import { Button, Card, Menu, MenuHandler, MenuItem, MenuList, Typography } from '@material-tailwind/react'

import React from 'react'
import {
    PhoneIcon, VideoCameraIcon, CheckIcon, ChatBubbleBottomCenterIcon, DotsVerticalIcon
} from "@heroicons/react/24/outline";
import AppBadge from './AppBadge';
export default function AppointmentCard() {
    return (
        <Card className='bg-primary mt-6 w-1/3 flex flex-row p-3'>
            <div>
                <img className='rounded-lg w-40 h-36'
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                />
            </div>
            <div className='flex flex-row pl-4'>
                <div className='flex flex-col'>
                    <Typography variant="h5" color="white" className="mb-2">
                        Natalie Paisley
                    </Typography>
                    <Typography variant="paragraph" color="green" className="mb-2">
                        Payment Confirm
                    </Typography>
                    <div className='grid grid-cols-2 gap-2'>

                        <Button className="rounded-full ">
                            <PhoneIcon color="white" className="h-5 w-5" />
                        </Button>
                        <Button className="rounded-full ">
                            <VideoCameraIcon color="white" className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className='grid grid-cols-1  place-content-end ml-3 gap-2'>
                    <AppBadge bg={"bg-green-600"} text="2:00 PM">
                        <CheckIcon color="white" className="h-5 w-5" />
                    </AppBadge>
                    <AppBadge text="Message">
                        <ChatBubbleBottomCenterIcon color="white" className="h-5 w-5" />
                    </AppBadge>
                </div>

            </div>
            <Menu>
                <MenuHandler>
                    <CheckIcon color="white" className="h-5 w-5" />
                </MenuHandler>
                <MenuList className="max-h-72">
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </MenuList>
            </Menu>
        </Card>
    );
}

