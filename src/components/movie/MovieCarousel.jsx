import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import MovieCard from "./MovieCard"
import './MovieCarousel.css'

function MovieGridView({ movies, title, isloading, controls }) {
    
    const skeletons = Array.from({ length: 7 })
    
    return (
        <div 
            className="
                w-full min-w-0 lg:w-[95%]
                h-auto
                pb-8 lg:pb-12
                relative
                carousel
                mx-auto
            "
        >
            <h1 
                className="
                    pl-8 sm:pl-12.5
                    w-full
                    flex 
                    items-start 
                "
            >
                {title}
            </h1>
            {controls}
            <Swiper
                modules={[Navigation]}
                slidesPerView={2}
                slidesPerGroup={2}
                breakpoints={{
                    640: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 16 },
                    768: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 16 },
                    1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 20 },
                    1280: { slidesPerView: 6, slidesPerGroup: 6, spaceBetween: 20 },
                    1440: { slidesPerView: 7, slidesPerGroup: 7, spaceBetween: 20 },
                }}
                allowTouchMove={true}
                spaceBetween={12}
                speed={550}
                navigation={true}
                onSlidesUpdated={(swiper) => {
                    // Exclude captions and bottom hover space when centering the controls.
                    const posterHeight = (swiper.slidesSizesGrid[0] || 0) * 10 / 7
                    const paddingTop = parseFloat(getComputedStyle(swiper.el).paddingTop)
                    swiper.el.style.setProperty('--poster-center', (paddingTop + posterHeight / 2) + 'px')
                }}
                className="
                    w-full
                    min-w-0
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