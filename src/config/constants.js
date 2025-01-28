export const CDN_URL = process.env.NODE_ENV === 'production'
  ? 'https://d1234abcd.cloudfront.net'
  : '';

// 이미지 URL 생성 함수 수정
export const getImageUrl = (path) => {
  // 개발 환경에서는 public 폴더의 이미지를 직접 사용
  if (!CDN_URL) {
    return path;
  }
  // 프로덕션 환경에서는 CDN URL 사용
  return `${CDN_URL}${path}`;
}; 