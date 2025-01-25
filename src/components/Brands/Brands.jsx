
import { useQuery, useQueryClient } from '@tanstack/react-query'
import style from './Brands.module.css'
import axios from 'axios'

export default function Brands() {
  
  async function getApi(){
    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
  }
  const {data} = useQuery({ queryKey: ['apiBrand'],
    queryFn: getApi })

    console.log(data?.data.data);
    
  for(let i=1;i<=3;i++){
    console.log(i);
    
  }
  return (
    <div>
      {data?.data.data.map((brand)=><>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <div className=''>
          <img src={brand.image} alt="" />
        </div>
      </div>
      </>)}
    </div>
  )
}
