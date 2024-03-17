import Link from "next/link"

const page = () => {
  return (
    <>
      <div className="m-10 flex flex-col gap-4">
        <Link 
         className="text-blue-500 hover:text-2xl hover:text-blue-800" 
         href={'csr/users'}>ClientSideRendering</Link>
        <Link 
         className="text-blue-500 hover:text-2xl hover:text-blue-800" 
         href={'ssr/users'}>ServerSideRendering</Link>
        <Link 
         className="text-blue-500 hover:text-2xl hover:text-blue-800" 
         href={'ssg/users'}>StaticSite</Link>
      </div>
    </>
  )
}

export default page