import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import MovieCard from "./MovieCard"
import './MovieGrid.css'

function MovieGridView({ movies, title }) {
    return (
        <div className="
            w-full             
            carousel
            overflow-x-hidden
        ">
            <h1 className="
                flex 
                items-start 
                w-full
            ">
                {title}
            </h1>
            <Swiper
                modules={[Navigation]}
                slidesPerView={"auto"}
                allowTouchMove={false}
                spaceBetween={5}
                speed={400}
                navigation
                loop
                className="
                    h-100
                    w-full
                    overflow-visible
            ">
                    {movies.map((movie) => (
                        <SwiperSlide 
                            key={movie.id} 
                            className="
                                w-60!
                                flex
                                justify-center
                                items-start          
                        ">
                            <MovieCard movie={movie} />
                        </SwiperSlide>
                    ))}
            </Swiper>                
        </div>
    )
}

export default MovieGridView