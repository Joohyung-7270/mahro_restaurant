export const CDN_URL = process.env.NODE_ENV === 'production'
  ? 'https://d1234abcd.cloudfront.net'
  : '';

// 이미지 URL 생성 함수 수정
export const getImageUrl = (path) => {
  // 이미지 경로에서 확장자를 제거하고 .webp로 변경
  const basePath = path.substring(0, path.lastIndexOf('.'));
  return `${basePath}.webp`;
}; 