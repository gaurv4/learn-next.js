import Users from "../users"

const usersSSG = async () => {
    const { data, error } = await getStaticProps()

    if (error) {
        return <h1 className="m-5 text-3xl font-mono">Error Happend !</h1>
    }

    return (
        <>
            <Users link={'ssg'} data={data} render={'(SSG)'} />
        </>
    )
}


export async function getStaticProps() {
    let data, error
    try {
        data = await (await fetch("https://dummyjson.com/users")).json()
    } catch (error) {
        return { error }
    }
    return {
        data,
        error,
    }
}

export default usersSSG