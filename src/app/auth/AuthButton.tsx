"use client"
import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import React, { useState } from 'react'

const AuthButton = () => {
  const [isLoading ,setIsLoading] = useState(false)
  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col relative z-50'>
      <RegisterLink className='flex-1' onClick={() => setIsLoading(true)}>

    
        <Button disabled={isLoading} variant={"outline"} className='w-full'>
            Sign Up

        </Button>
        </RegisterLink>
        <LoginLink className='flex-1' onClick={() => setIsLoading(true)}>
        <Button disabled={isLoading}  className='w-full'>
            Login
        </Button>

        </LoginLink>
       
    </div>
  )
}

export default AuthButton