
import * as data from './api.json'


export async function GET(req, { params }) {
  
  const id = params.id;
  const findItem = data.find((item) => item.id == id);

  if (findItem) return Response.json(findItem);
  else return Response.json({msg:"Item not found"});
}
