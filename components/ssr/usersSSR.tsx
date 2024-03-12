import Users from "../users";

const usersSSR = async () => {
    const { data, error } = await getServerSideProps()

    if (error) {
        return <h1 className="m-5 text-3xl font-mono">Error Happend !</h1>
    }

    return (
        <>
            <Users link={'ssr'} data={data} render={'(SSR)'} />
        </>
    )
}

export async function getServerSideProps() {
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

export default usersSSR
