import Link from "next/link";
export default function Page() {
  return (
    <div className='bg-blue-500'>
      <div className="text-center font-bold text-xl">
        <h1>About</h1>
        <h2>Natthaphong Tembanng</h2>
        <h3 className="text-white">::: computer science :::</h3>
        <p>ID :: 65042380107</p>
      </div>
      <div className='text-center'>
        <Link href="/profile/info" className="text-white">
          go to info
        </Link>
      </div>
    </div>
  );
}
