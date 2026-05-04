import React, { useEffect, useRef, useState } from 'react';
import simpleParallax from 'simple-parallax-js';

export default function ParallaxImage({ src, alt, className = '', wrapperClassName = '', scale = 1.8 }) {
  const imgRef = useRef(null);
  const parallaxRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded || !imgRef.current) return;
    const t = setTimeout(() => {
      try {
        parallaxRef.current = new simpleParallax(imgRef.current, {
          scale,
          orientation: 'down',
          overflow: false,
          delay: 0.5,
        });
      } catch (e) { /* noop */ }
    }, 100);
    return () => {
      clearTimeout(t);
      try { parallaxRef.current?.destroy(); } catch (e) { /* noop */ }
      parallaxRef.current = null;
    };
  }, [isLoaded, scale]);

  return (
    <div className={`overflow-hidden ${wrapperClassName}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
