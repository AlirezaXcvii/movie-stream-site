'use client'

// import Card from './Card'
import React from "react"
import Slider from "react-slick";
import Card from "./Card";



export default function MovieBar(props) {
  const [data , setData ] = React.useState()
  const API_KEY = process.env.API_KEY
  // console.log(API_KEY)
  
  React.useEffect(
    ()=>{
      fetch(`https://api.themoviedb.org/3/${props.genre}?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  ,[])
  // console.log(data)
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  

  return (
    <div className='max-w-[1400px] mx-auto mb-4'>
        <h2 className='text-2xl'>{props.title}</h2>
        <div className='max-w-[1400px] mx-auto'>
            {data && <Slider {...settings}>
                {data.results.map(movie => (
                    <Card key={movie.id} data={movie} />
                ))}
            </Slider>}
        </div>
          
    </div>
  )
}
