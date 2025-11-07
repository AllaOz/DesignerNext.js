import React, { useState, useRef } from 'react';
import styles from '../styles/projects.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data/slider.json';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const ProjectsSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        focusOnSelect: true,
        accessibility: true,
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

    const modalSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        touchThreshold: 5,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: (
            <button type="button" className={styles.modalArrow} aria-label="Previous">
                <AiOutlineLeft />
            </button>
        ),
        nextArrow: (
            <button type="button" className={styles.modalArrow} aria-label="Next">
                <AiOutlineRight />
            </button>
        ),
        beforeChange: (current, next) => {
            setCurrentImageIndex(next);
        },
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    dots: false,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                    touchMove: true,
                    touchThreshold: 10,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    };

    const openModal = (project) => {
        if (!project || !project.gallery || project.gallery.length === 0) {
            console.error('Invalid project data:', project);
            return;
        }
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setIsModalOpen(true);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'unset';
        }
    };

    const handleModalContentClick = (e) => {
        // Don't navigate if clicking on buttons, links, or slider controls
        if (
            e.target.closest('button') ||
            e.target.closest('.slick-arrow') ||
            e.target.closest('.slick-dots')
        ) {
            e.stopPropagation();
            return;
        }

        // Only work on desktop (screen width > 820px)
        if (typeof window !== 'undefined' && window.innerWidth > 820) {
            e.stopPropagation(); // Prevent modal from closing
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const middle = width / 2;

            if (sliderRef.current) {
                if (clickX < middle) {
                    // Click on left half - go to previous
                    sliderRef.current.slickPrev();
                } else {
                    // Click on right half - go to next
                    sliderRef.current.slickNext();
                }
            }
        }
    };

    return (
        <>
            <div className={styles.projectContainer}>
                <h2 className={styles.headingTwo}>Projects</h2>
                <div className={styles.sliderContainer}>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div key={item.id} className={styles.projectSlide}>
                                <div className={styles.imageContainer} onClick={() => openModal(item)}>
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        className={styles.sliderImage}
                                        width={400}
                                        height={300}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <h3 className={styles.projectTitle}>{item.title}</h3>
                                        <p className={styles.projectDescription}>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Modal Gallery with Carousel */}
            {isModalOpen && selectedProject && selectedProject.gallery && selectedProject.gallery.length > 0 && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={handleModalContentClick}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            <AiOutlineClose />
                        </button>

                        <div className={styles.modalHeader}>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                        </div>

                        <div className={styles.modalSliderContainer}>
                            <Slider 
                                ref={sliderRef}
                                {...modalSliderSettings} 
                                initialSlide={currentImageIndex}
                            >
                                {selectedProject.gallery.map((image, index) => (
                                    <div key={index} className={styles.modalSlide}>
                                        <div className={styles.modalImageWrapper}>
                                            <Image
                                                src={image}
                                                alt={`${selectedProject.title} - Image ${index + 1}`}
                                                className={styles.modalImage}
                                                width={600}
                                                height={450}
                                                quality={90}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        <div className={styles.imageCounter}>
                            {currentImageIndex + 1} / {selectedProject.gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsSection;
