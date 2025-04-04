"use client"
import { instance } from '@/components/hooks/instance'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const getAllProducts = () => {
    const { data, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => instance().get('/products').then(res => res.data)
    })
    console.log(data);
    
    return (
        <div>getAllProducts</div>
    )
}

export default getAllProducts