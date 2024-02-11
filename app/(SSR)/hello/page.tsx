import React from 'react'
export const metadata = {
  title: 'hello page',
}
const page = async () =>  {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // throw Error("Bazinga!");
  return (
    <div className=''>HELLO WORLD!</div>
  )
}

export default page