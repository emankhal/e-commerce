import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

export default function Brands() {
  const [specificBrand, setSpecificBrand] = useState(null);
  const [isOpen, setIsOpen] = useState(false); 
  const [isloading, setIsloading] = useState(false); 

  async function getApi() {

    return await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
  }

  const { data,isLoading } = useQuery({
    queryKey: ['apiBrand'],
    queryFn: getApi
  });

  function getSpecificBrand(brandId) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${brandId}`)
      .then((res) => {
        setSpecificBrand(res.data.data);
        setIsOpen(true);
      })
      .catch((err) => console.log(err));
  }

  function closeDialog() {
    setIsOpen(false);
    setSpecificBrand(null);
  }
  if(isLoading){
    return (
      <div role="status" className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Brands</title>
      </Helmet>
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {data?.data.data.map((brand) => (
            <div 
              key={brand._id} 
              onClick={() => getSpecificBrand(brand._id)} 
              className='border border-gray-200 p-3 m-3 hover:shadow-[2px_2px_2px__2px#4fa74f60] hover:scale-[1.01] transition-all cursor-pointer'
            >
              <img src={brand.image} alt={brand.name} className="w-full h-auto" />
            </div>
          ))}
        </div>

        {isOpen && specificBrand && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-5 relative">
              <button onClick={closeDialog} className="absolute top-2 right-2 text-white text-xl px-2.5 py-1 bg-red-600 rounded-full ">X</button>
              <img 
                className="object-cover w-full rounded-lg" 
                src={specificBrand.image} 
                alt={specificBrand.name} 
              />
              <h5 className="mt-2 text-xl font-bold">{specificBrand.name}</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
}