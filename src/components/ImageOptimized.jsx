import { useState } from 'react';

const ImageOptimized = ({ src, alt, className, width = 800 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // 원본 이미지 경로 가져오기
  const getOriginalPath = (webpPath) => {
    const basePath = webpPath.substring(0, webpPath.lastIndexOf('.'));
    // 원본 확장자를 .jpg로 가정
    return `${basePath}.jpg`;
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
    console.error(`Failed to load image: ${src}`);
  };

  return (
    <div className={`relative ${className}`}>
      {error ? (
        <div className={`${className} bg-gray-200 flex items-center justify-center`}>
          <span className="text-gray-500">이미지를 불러올 수 없습니다</span>
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <picture>
            <source srcSet={src} type="image/webp" />
            <img
              src={getOriginalPath(src)}
              alt={alt}
              className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
              onError={handleError}
              width={width}
              height={width * 0.75}
            />
          </picture>
        </>
      )}
    </div>
  );
};

export default ImageOptimized; 