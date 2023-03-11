'use client';
import React from "react";
import Card from "./Card";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation]);

export default function MovieBar(props) {
  const [data , setData ] = React.useState();
  const API_KEY = process.env.API_KEY;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const movies = data?.results || [];
  const maxIndex = Math.floor((movies.length - 1) / 1);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : maxIndex);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev < maxIndex ? prev + 1 : 0);
  };

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${props.genre}?api_key=b9e4f85c3b6987a76b17bb7579bc1ac8`)
        .then((response) => response.json())
        .then((data) => setData(data));
  }, []);

  return (
    <div className='max-w-[1400px] mx-auto mb-4'>
        <h2 className='text-2xl'>{props.title}</h2>
        <div className='max-w-[1400px] mx-auto relative'> 
            <div className='overflow-hidden'>
              <Swiper
                spaceBetween={80}
                slidesPerView={2}
                loop={true}
                navigation
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                  1200: {
                    slidesPerView: 6,
                  },
                }}
              >
                {movies.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <Card data={movie} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        </div>
    </div>
  );
}
