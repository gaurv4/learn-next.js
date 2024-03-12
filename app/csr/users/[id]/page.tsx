'use client'
import useSWR from 'swr'
import Profile from '@/components/profile'

const fetcher = async (url: string, ...args: any[]) => {
    const response = await fetch(url, ...args);
    return response.json();
  };

const page = ({ params }:any) => {
    const { data, error, isLoading } = useSWR(`http://dummyjson.com/users/${params.id}`, fetcher)
    if (error) {
        return (
            <h1 className="text-2xl m-4">Error happend! {error.message}</h1>
        )
    }
    if (isLoading) {
        return (
            <h1 className="text-2xl m-4">Loading...</h1>
        )
    }
    return (
        <>
            <Profile data = {data}/>    
        </>
    )
}

export default page