import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import MovieCard from "./MovieCard"
import './MovieCarousel.css'

function MovieGridView({ movies, title, isloading }) {
    
    const skeletons = Array.from({ length: 7 })
    
    return (
        <div 
            className="
                w-[95%]
                h-auto
                pb-20
                relative
                carousel
                mx-auto
            "
        >
            <h1 
                className="
                    pl-12.5
                    w-full
                    flex 
                    items-start 
                "
            >
                {title}
            </h1>
            <Swiper
                modules={[Navigation]}
                slidesPerView={7}
                slidesPerGroup={7}
                allowTouchMove={false}
                spaceBetween={20}
                speed={550}
                navigation={true}
                className="
                    w-full
                    overflow-visible
                "
            > 
                {isloading
                    ?   skeletons.map((_, index) => (
                        <SwiperSlide key={index}>
                            <MovieCard loading />
                        </SwiperSlide>
                        ))
                    :   movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        ))
                }
            </Swiper>                 
        </div>
    )
}

export default MovieGridView