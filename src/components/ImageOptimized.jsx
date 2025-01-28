import { useState } from 'react';

const ImageOptimized = ({ src, alt, className, width = 800 }) => {
  const [isLoading, setIsLoading] = useState(true);

  // WebP 버전의 이미지 경로 생성
  const getWebPPath = (imagePath) => {
    const path = imagePath.substring(0, imagePath.lastIndexOf('.'));
    return `${path}.webp`;
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <picture>
        <source srcSet={getWebPPath(src)} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          width={width}
          height={width * 0.75}
        />
      </picture>
    </div>
  );
};

export default ImageOptimized; 