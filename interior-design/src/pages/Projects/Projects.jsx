import React from 'react';
import styles from '../Projects/projects.module.scss';
import Slider from 'react-slick';
import Header from '../../app/components/Header/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../app/data/slider.json';



const Projects = () => {
    const settings = {
            focusOnSelect: true,
            accessibility:true,
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    focusOnSelect: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    focusOnSelect: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    focusOnSelect: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                }
              ]
            };

    return (
        <>
        <Header /> 
    <div className={styles.projectContainer}>
        <h2 className={styles.headingTwo}>Projects</h2>
        <div className={styles.sliderContainer}>
        <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id}>
                        <img src={item.src} alt={item.alt} className={styles.sliderImage} />

                    </div>
                ))}
            </Slider>
            </div>
        </div>
        
        </>
        );
};


export default Projects;