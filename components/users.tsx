import Link from "next/link"

const users = (props:any) => {
    const data = props.data
    return (
        <>
            <h1 className="font-serif text-3xl m-4">Users : {props.render}</h1>
            {
                data?.users?.map((user:any) => {
                    return (
                        <div className="ml-6">
                            <Link className="hover:text-blue-700 hover:text-2xl" key={user.id} href={`/${props.link}/users/${user.id}`}>{user.firstName}</Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default users