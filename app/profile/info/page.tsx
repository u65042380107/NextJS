import Link from "next/link"

export default function info() {
  return (
    <div className='text-center bg-blue-500 p-10'>
        <h1>info</h1>
        <Link href = '/about' className='text-red-500'> go to about</Link>
    </div>
  )
}
