import React, { useState, useEffect, useRef } from 'react';
import '../../index.css'
import { useLocation } from 'react-router-dom';
import { debounce } from 'lodash';

const SmoothResizeScrollWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const location = useLocation();
  const [isResizing, setIsResizing] = useState(false);
  const scrollPositionRef = useRef(0);

  // Save scroll position before refresh/unload
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scrollPos-${location.pathname}`, window.scrollY);
    };

    window.addEventListener('beforeunload', saveScrollPosition);
    return () => window.removeEventListener('beforeunload', saveScrollPosition);
  }, [location.pathname]);

  // Restore scroll position on load
  useEffect(() => {
    const savedPosition = sessionStorage.getItem(`scrollPos-${location.pathname}`);
    if (savedPosition) {
      window.scrollTo({
        top: parseInt(savedPosition),
        behavior: 'auto' // Instant scroll on load
      });
      sessionStorage.removeItem(`scrollPos-${location.pathname}`);
    }

    // Smooth scroll after initial load
    const timer = setTimeout(() => {
      window.scrollTo({
        top: parseInt(savedPosition || 0),
        behavior: 'smooth'
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Smooth resize handling
  useEffect(() => {
    const handleResize = debounce(() => {
      setIsResizing(true);
      
      // Apply smooth transitions during resize
      if (wrapperRef.current) {
        wrapperRef.current.style.transition = 'all 0.3s ease-in-out';
      }

      const timer = setTimeout(() => {
        setIsResizing(false);
        if (wrapperRef.current) {
          wrapperRef.current.style.transition = '';
        }
      }, 300);

      return () => clearTimeout(timer);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Smooth scroll event listener
  useEffect(() => {
    const handleScroll = debounce(() => {
      scrollPositionRef.current = window.scrollY;
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`smooth-wrapper ${isResizing ? 'resizing' : ''}`}
      style={{
        minHeight: '100vh',
        overflowX: 'hidden'
      }}
    >
      {children}
    </div>
  );
};

export default SmoothResizeScrollWrapper;