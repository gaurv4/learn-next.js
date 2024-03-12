import Image from "next/image"

const profile = (props:any) => {
    const data = props.data
    if (data.username) {
        return (
            <>
                <h1 className="font-serif text-3xl m-4">Username : {data.username}</h1>
                <Image
                    src={`${data.image}`}
                    alt="user Image"
                    width={100}
                    height={100}
                    className='m-7 ml-14'
                />
                <div className='ml-7'>
                    <p>Name : {data.firstName + '  ' + data.lastName}</p>
                    <p>Email : {data.email}</p>
                    <p>Phone : {data.phone}</p>
                    <p>Address : {data.address.address + '  ' + data.address.city}</p>
                </div>
            </>
        )
    }
    return (
        <h1 className="m-4 text-3xl font-mono">Internal Server Error !</h1>
    )
}

export default profile