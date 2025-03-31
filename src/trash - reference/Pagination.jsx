import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlidesWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 33.333%;
  padding: 0 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  @media (max-width: 768px) {
    flex: 0 0 50%;
  }
  
  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
  transform: ${props => props.isActive ? 'scale(1.05)' : 'scale(0.95)'};
  opacity: ${props => props.isActive ? '1' : '0.8'};
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  margin: 0 5px;
  padding: 0;
  background-color: ${props => props.isActive ? '#4CAF50' : '#ccc'};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &:first-child {
    left: 10px;
  }
  
  &:last-child {
    right: 10px;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CustomPagination = ({ children, itemsPerPage = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const slidesWrapperRef = useRef(null);
  
  // Handle window resize
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reset to first slide on resize to prevent layout issues
      setCurrentIndex(0);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Determine how many items to show based on screen size
  const getItemsPerPage = () => {
    if (windowWidth <= 480) return 1;
    if (windowWidth <= 768) return 2;
    return itemsPerPage;
  };
  
  const itemsToShow = getItemsPerPage();
  const totalSlides = React.Children.count(children);
  const totalPages = Math.ceil(totalSlides / itemsToShow);
  
  // Handle swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      goPrev();
    }
  };
  
  // Update slide position
  useEffect(() => {
    if (slidesWrapperRef.current) {
      const slideWidth = 100 / itemsToShow;
      slidesWrapperRef.current.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    }
  }, [currentIndex, itemsToShow]);
  
  const goToSlide = (index) => {
    if (index >= 0 && index < totalPages) {
      setCurrentIndex(index);
    }
  };
  
  const goPrev = () => {
    goToSlide(currentIndex - 1);
  };
  
  const goNext = () => {
    goToSlide(currentIndex + 1);
  };
  
  // Render dots with 3-dot pattern
  const renderDots = () => {
    if (totalPages <= 1) return null;
    
    const dots = [];
    const maxVisibleDots = 5; // Show max 5 dots including ellipsis
    
    if (totalPages <= maxVisibleDots) {
      // Show all dots if few pages
      for (let i = 0; i < totalPages; i++) {
        dots.push(
          <Dot
            key={i}
            isActive={i === currentIndex}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        );
      }
    } else {
      // Show dots with ellipsis
      const showLeftDots = currentIndex > 2;
      const showRightDots = currentIndex < totalPages - 3;
      
      // First dot
      dots.push(
        <Dot
          key={0}
          isActive={currentIndex === 0}
          onClick={() => goToSlide(0)}
          aria-label="Go to first slide"
        />
      );
      
      // Left ellipsis or second dot
      if (showLeftDots) {
        dots.push(<span key="left-ellipsis">...</span>);
      } else {
        dots.push(
          <Dot
            key={1}
            isActive={currentIndex === 1}
            onClick={() => goToSlide(1)}
            aria-label="Go to slide 2"
          />
        );
      }
      
      // Middle dots
      if (showLeftDots && showRightDots) {
        // Show current index and neighbors
        for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {
          dots.push(
            <Dot
              key={i}
              isActive={i === currentIndex}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        }
      } else if (showLeftDots) {
        // Show last 3 dots
        for (let i = totalPages - 3; i < totalPages - 1; i++) {
          dots.push(
            <Dot
              key={i}
              isActive={i === currentIndex}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        }
      } else if (showRightDots) {
        // Show first 3 dots
        for (let i = 1; i < 3; i++) {
          dots.push(
            <Dot
              key={i}
              isActive={i === currentIndex}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        }
      }
      
      // Right ellipsis or second last dot
      if (showRightDots) {
        dots.push(<span key="right-ellipsis">...</span>);
      } else {
        dots.push(
          <Dot
            key={totalPages - 2}
            isActive={currentIndex === totalPages - 2}
            onClick={() => goToSlide(totalPages - 2)}
            aria-label={`Go to slide ${totalPages - 1}`}
          />
        );
      }
      
      // Last dot
      dots.push(
        <Dot
          key={totalPages - 1}
          isActive={currentIndex === totalPages - 1}
          onClick={() => goToSlide(totalPages - 1)}
          aria-label={`Go to slide ${totalPages}`}
        />
      );
    }
    
    return <DotsContainer>{dots}</DotsContainer>;
  };
  
  // Render slides
  const renderSlides = () => {
    const slides = [];
    const slideGroups = [];
    
    // Group children into slides
    React.Children.forEach(children, (child, index) => {
      const groupIndex = Math.floor(index / itemsToShow);
      
      if (!slideGroups[groupIndex]) {
        slideGroups[groupIndex] = [];
      }
      
      slideGroups[groupIndex].push(child);
    });
    
    // Create slides with cards
    slideGroups.forEach((group, groupIndex) => {
      slides.push(
        <Slide key={groupIndex}>
          {group.map((item, itemIndex) => {
            const absoluteIndex = groupIndex * itemsToShow + itemIndex;
            const isActive = absoluteIndex === currentIndex * itemsToShow + Math.floor(itemsToShow / 2);
            
            return (
              <div key={itemIndex} style={{ padding: '10px 0' }}>
                <Card isActive={isActive}>
                  {item}
                </Card>
              </div>
            );
          })}
        </Slide>
      );
    });
    
    return slides;
  };
  
  return (
    <PaginationContainer>
      <NavigationButton 
        onClick={goPrev} 
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        &lt;
      </NavigationButton>
      
      <SlidesWrapper
        ref={slidesWrapperRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {renderSlides()}
      </SlidesWrapper>
      
      <NavigationButton 
        onClick={goNext} 
        disabled={currentIndex >= totalPages - 1}
        aria-label="Next slide"
      >
        &gt;
      </NavigationButton>
      
      {renderDots()}
    </PaginationContainer>
  );
};

export default CustomPagination;