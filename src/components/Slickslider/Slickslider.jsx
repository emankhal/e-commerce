
import Slider from 'react-slick';
import style from'./Slickslider.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Slickslider() {
  const [categories, setCategories] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
  };
  async function getData(){
    let res = await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
    setCategories(res.data.data);
    
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <div>
       <Slider {...settings}>
      {categories.map((category) => (
        <div key={category.id}>
          <img className='aspect-square w-full' src={category.image} alt={category.name} />
          <h4>{category.name}</h4>
          
        </div>
      ))}
    </Slider>
    </div>
  )
}
