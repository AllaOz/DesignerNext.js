import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, animationType = 'default', id, threshold = 0.1 }) => {
    const [ref, isVisible] = useScrollAnimation({ threshold });

    const getAnimationClass = () => {
        switch (animationType) {
            case 'left':
                return 'scroll-animate-left';
            case 'right':
                return 'scroll-animate-right';
            case 'scale':
                return 'scroll-animate-scale';
            default:
                return 'scroll-animate';
        }
    };

    return (
        <section
            id={id}
            ref={ref}
            className={`${getAnimationClass()} ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </section>
    );
};

export default AnimatedSection;

