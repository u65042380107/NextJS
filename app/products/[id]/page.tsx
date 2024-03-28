'use client'
import { useRouter } from "next/navigation";

async function getDataFromAPI(id: number) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  if (!res.ok) {
    throw new Error("fetch error");
  }
  //   console.log(res);
  return res.json();
}

export default async function Page({ params }) {
  const router = useRouter();
  const product = await getDataFromAPI(params.id);
  const handleDelete = async (id:number) => {
    try {
        await fetch(`/api/products/${id}`, {
            method: 'DELETE'
        });

        // initProduct();
        console.log(id)
    } catch (error) {
        console.error(error);
    }
}
  return (
    <div>
      {product.product_id && (
        <div>
          <table className="w-1/3 mx-auto text-center font-thai">
            <thead className="font-bold text-xl bg-gray-300 ">
              <tr>
                <td className="px-4 py-2">ID</td>
                <td className="px-4 py-2">Name</td>
                <td className="px-4 py-2">Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">{product.product_id}</td>
                <td className="px-4 py-2">{product.product_name}</td>
                <td className="px-4 py-2">{product.product_price}</td>
              </tr>
              <tr>
                <td></td>
                <td><button
            className="rounded-md bg-green-400 p-2 items-center m-10"
            onClick={() => router.push(`/products`)}
          >
            Back
          </button></td>
          <td></td>
                
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {!product.product_id && (
        <div>
          <h1>Not fount</h1>
          <button
            className="rounded-md bg-green-400 p-2 mx-auto"
            onClick={() => router.push(`/products`)}
          >
            Back
          </button>

        </div>
      )}
    </div>
  );
}
