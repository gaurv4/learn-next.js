import UserProfileSSG from "@/components/ssg/userProfileSSG"

const page = ({params}:any) => {
  return (
    <UserProfileSSG params = {params}/>
  )
}

export default page