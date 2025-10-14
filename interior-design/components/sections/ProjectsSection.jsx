import React, { useState } from 'react';
import styles from '../../pages/Projects/projects.module.scss';
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

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if (selectedProject && selectedProject.gallery) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject && selectedProject.gallery) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
            );
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

            {/* Modal Gallery */}
            {isModalOpen && selectedProject && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            <AiOutlineClose />
                        </button>

                        <div className={styles.modalHeader}>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                        </div>

                        <div className={styles.galleryContainer}>
                            <button className={styles.navButton} onClick={prevImage}>
                                <AiOutlineLeft />
                            </button>

                            <div className={styles.imageWrapper}>
                                <Image
                                    src={selectedProject.gallery[currentImageIndex]}
                                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                                    className={styles.modalImage}
                                    width={600}
                                    height={450}
                                />
                            </div>

                            <button className={styles.navButton} onClick={nextImage}>
                                <AiOutlineRight />
                            </button>
                        </div>

                        <div className={styles.imageCounter}>
                            {currentImageIndex + 1} / {selectedProject.gallery.length}
                        </div>

                        <div className={styles.thumbnails}>
                            {selectedProject.gallery.map((image, index) => (
                                <div
                                    key={index}
                                    className={`${styles.thumbnail} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={80}
                                        height={60}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectsSection;
