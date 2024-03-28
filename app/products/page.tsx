"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

async function getDataFromAPI() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("fetch error");
  }
//   console.log(res);
  return res.json();
}

export default function Page() {
  const [productstate, setProductstate] = useState([]);
  const router = useRouter();
  const initProduct = async () => {
    try {
      const data = await getDataFromAPI();
      setProductstate(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    initProduct();
  }, []);

  const handleDelete = async (id:number) => {
    try {
        await fetch(`/api/products/${id}`, {
            method: 'DELETE'
        });

        initProduct();
        console.log(id)
    } catch (error) {
        console.error(error);
    }
}
//   console.log(productstate);

  return (
    <div>
        <h1 className="text-center font-bold text-5xl">Product</h1><br />
        <table className='w-1/3 mx-auto text-center font-thai'>
    <thead className='font-bold text-xl bg-gray-300 '>
        <tr>
            <td className='px-4 py-2'>ID</td>
            <td className='px-4 py-2'>Name</td>
            <td className='px-4 py-2'>Price</td>
            <td className='px-4 py-2'>Action</td>
        </tr>
    </thead>
    <tbody>
        {productstate.map((d, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                <td className='px-4 py-2'>{d.product_id}</td>
                <td className='px-4 py-2'>{d.product_name}</td>
                <td className='px-4 py-2'>{d.product_price}</td>
                <td className='px-4 py-2'>
                  <button className='rounded-md bg-green-400 p-2 mx-5' onClick={()=>router.push(`/products/${d.product_id}`)}>info</button>
                  <button className='rounded-md bg-red-400 p-2 mx-5' onClick={() => handleDelete(d.product_id)}>Delete</button>                  
                  </td>
            </tr>
        ))}
    </tbody>
</table>
    </div>
  );
}
