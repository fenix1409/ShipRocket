"use client"
import { instance } from '@/components/hooks/instance';
import getAllProducts from '@/service/getAllProducts'
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const Home = () => {
    // const products = getAllProducts()
    // console.log(products);
    const { data, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => instance().get('/products').then(res => res.data)
    })
    console.log(data);
  return (
    <div>Home</div>
  )
}

export default Home