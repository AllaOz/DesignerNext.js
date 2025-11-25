import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../components/styles/projects.module.scss';
import Slider from 'react-slick';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../data/slider.json';
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

// Custom arrow component to filter out slick-carousel props
const CustomArrow = ({ className, ariaLabel, direction, children, ...props }) => {
  // Filter out slick-carousel specific props that React doesn't recognize
  const { currentSlide, slideCount, ...restProps } = props;
  
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.stopPropagation();
        if (props.onClick) {
          props.onClick(e);
        }
      }}
      {...restProps}
    >
      {children}
    </button>
  );
};



const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchEndRef = useRef({ x: 0, y: 0 });
  const modalContentRef = useRef(null);

  const settings = {
    focusOnSelect: false,
    accessibility: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          focusOnSelect: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          focusOnSelect: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          initialSlide: 0,
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
    
    // Preload first few images for faster loading
    if (typeof window !== 'undefined') {
      try {
        const imagesToPreload = project.gallery.slice(0, 3).filter(Boolean);
        imagesToPreload.forEach((src) => {
          if (src) {
            const img = new window.Image();
            img.src = src;
          }
        });
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    }
  };

  
  // Preload next and previous images when image changes
  useEffect(() => {
    if (selectedProject && selectedProject.gallery && selectedProject.gallery.length > 0 && typeof window !== 'undefined') {
      try {
        // Preload next image
        const nextIndex = currentImageIndex === selectedProject.gallery.length - 1 ? 0 : currentImageIndex + 1;
        if (selectedProject.gallery[nextIndex]) {
          const nextImg = new window.Image();
          nextImg.src = selectedProject.gallery[nextIndex];
        }
        
        // Preload previous image
        const prevIndex = currentImageIndex === 0 ? selectedProject.gallery.length - 1 : currentImageIndex - 1;
        if (selectedProject.gallery[prevIndex]) {
          const prevImg = new window.Image();
          prevImg.src = selectedProject.gallery[prevIndex];
        }
      } catch (error) {
        console.error('Error preloading images:', error);
      }
    }
  }, [currentImageIndex, selectedProject]);

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

  const handleTouchStart = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 820) {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    }
  };

  const handleTouchMove = (e) => {
    // Don't prevent default to allow scrolling
    // Only prevent if it's a clear horizontal swipe
    if (typeof window !== 'undefined' && window.innerWidth <= 820) {
      const touch = e.touches[0];
      const deltaX = Math.abs(touch.clientX - touchStartRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartRef.current.y);
      
      // If horizontal movement is significantly greater than vertical, allow swipe
      if (deltaX > deltaY * 1.5 && deltaX > 30) {
        // This is a horizontal swipe, allow it
        return;
      }
      // Otherwise, allow normal scrolling
    }
  };

  const handleTouchEnd = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 820 && sliderRef.current) {
      const touch = e.changedTouches[0];
      touchEndRef.current = { x: touch.clientX, y: touch.clientY };
      
      const deltaX = touchEndRef.current.x - touchStartRef.current.x;
      const deltaY = Math.abs(touchEndRef.current.y - touchStartRef.current.y);
      const minSwipeDistance = 50;

      // Only swipe horizontally if horizontal movement is greater than vertical
      if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaX) > deltaY) {
        if (deltaX > 0) {
          // Swipe right - go to previous
          sliderRef.current.slickPrev();
        } else {
          // Swipe left - go to next
          sliderRef.current.slickNext();
        }
      }
    }
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
    focusOnSelect: false,
    accessibility: true,
    prevArrow: (
      <CustomArrow 
        className={styles.modalArrow} 
        ariaLabel="Previous"
        direction="prev"
      >
        <AiOutlineLeft />
      </CustomArrow>
    ),
    nextArrow: (
      <CustomArrow 
        className={styles.modalArrow} 
        ariaLabel="Next"
        direction="next"
      >
        <AiOutlineRight />
      </CustomArrow>
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
          swipe: false,
          swipeToSlide: false,
          touchMove: false,
          touchThreshold: 5,
          vertical: false,
          verticalSwiping: false,
          useCSS: true,
          useTransform: true,
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Interior Design Projects by Bureau Soul Concept</title>
        <meta name="description" content="Explore stunning interior design projects by Dariya Amadi and Bureau Soul Concept. Luxury residential designs in Dubai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.soulcnpt.com/projects" />
        <meta property="og:title" content="Interior Design Projects by Bureau Soul Concept" />
        <meta property="og:description" content="Explore stunning interior design projects by Dariya Amadi and Bureau Soul Concept. Luxury residential designs in Dubai." />
        <meta property="og:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
        <meta property="og:image:secure_url" content="https://www.soulcnpt.com/icon-180-apple.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="180" />
        <meta property="og:image:height" content="180" />
        <meta property="og:image:alt" content="Bureau Soul Concept Logo" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Interior Design Projects by Bureau Soul Concept" />
        <meta property="twitter:description" content="Explore stunning interior design projects by Dariya Amadi and Bureau Soul Concept." />
        <meta property="twitter:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
        <link rel="icon" href="/favicon-32.png" />
      </Head>
      <Header />
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
          <div 
            ref={modalContentRef}
            className={styles.modalContent} 
            onClick={handleModalContentClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.modalHeader}>
              <div>
                <h2>{selectedProject.title || 'Project'}</h2>
                <p>{selectedProject.description || ''}</p>
              </div>
              <button 
                className={styles.closeButton} 
                onClick={closeModal}
              >
                <AiOutlineClose />
              </button>
            </div>

            <div className={styles.modalSliderContainer}>
              <Slider 
                ref={sliderRef}
                {...modalSliderSettings} 
                initialSlide={currentImageIndex}
              >
                {selectedProject.gallery.map((image, index) => (
                  image && (
                    <div key={index} className={styles.modalSlide}>
                      <div className={styles.modalImageWrapper}>
                <Image
                          src={image}
                          alt={`${selectedProject.title || 'Project'} - Image ${index + 1}`}
                  className={styles.modalImage}
                  width={600}
                  height={450}
                          quality={90}
                          onError={(e) => {
                            console.error('Image load error:', image);
                          }}
                />
              </div>
                    </div>
                  )
                ))}
              </Slider>
            </div>

            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {selectedProject.gallery.length}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};


export default Projects;