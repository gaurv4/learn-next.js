'use client'
import Users from '@/components/users'
import useSWR from 'swr'

const fetcher = async (url: string, ...args: any[]) => {
    const response = await fetch(url, ...args);
    return response.json();
  };

const page = () => {
    const { data, error, isLoading } = useSWR("https://dummyjson.com/users", fetcher)
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
        <Users link = {'csr'} data = {data} render = {'(CSR)'}/>
    </>
  )
}

export default page