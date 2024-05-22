import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex flex-col items-center '>
        <h1 className='mb-5'>Github followers: {data.followers}</h1>
        <img className='rounded-xl' src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/yagnangg333')
    return response.json()
}


    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/yagnangg333')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    