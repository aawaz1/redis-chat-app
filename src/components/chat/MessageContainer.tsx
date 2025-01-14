"use client"
import React, { useEffect } from 'react'
import ChatTopbar from './ChatTopbar'
import MessageList from './MessageList'
import ChatBottombar from './ChatBottombar'
import { useSelectedUser } from '@/store/useSelectedUser'

const MessageContainer = () => {
    const {setSelectedUser} = useSelectedUser();

    useEffect(() => {

        const handleEscape = (e : KeyboardEvent) => {
            if(e.key === 'Escape') setSelectedUser(null);
        }

        document.addEventListener("keydown" , handleEscape);

        return () => document.removeEventListener("keydown", handleEscape)
    }, [setSelectedUser])
  return (
    <div className='flex flex-col justify-between h-full w-full'>
        <ChatTopbar/>
            <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
                <MessageList/>
                <ChatBottombar/>
            </div>

    </div>
  )
}

export default MessageContainer