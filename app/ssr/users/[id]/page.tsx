import UserProfileSSR from "@/components/ssr/userProfileSSR"

const page = ({params}:any) => {
  return (
    <>
      <UserProfileSSR params={params}/>
    </>
  )
}

export default page