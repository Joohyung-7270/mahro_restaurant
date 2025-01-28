import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ClockIcon, MapPinIcon, PhoneIcon, SparklesIcon } from '@heroicons/react/24/outline';
import ImageOptimized from '../components/ImageOptimized';
import { getImageUrl } from '../config/constants';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    getImageUrl('/out1.jpg'),
    getImageUrl('/out2.jpg'),
    getImageUrl('/out3.jpg'),
    getImageUrl('/out4.jpg')
  ];
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // 이전 슬라이드
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // 다음 슬라이드
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // 터치 스와이프 처리
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const menuItems = [
    {
      name: "한우 우거지탕",
      description: "신선한 한우와 우거지의 조화",
      image: getImageUrl('/foodcow_in.JPG')
    },
    {
      name: "부대찌개",
      description: "푸짐한 재료와 깊은 맛",
      image: getImageUrl('/ham1.jpg')
    },
    {
      name: "더 많은 메뉴",
      description: "마로상회의 다양한 메뉴를 만나보세요",
      isLink: true
    }
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 37.550517,
    lng: 127.126179
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      }
    ],
    mapTypeControl: false,
    streetViewControl: true,
    scrollwheel: false,
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 풀스크린 히어로 섹션 */}
      <div className="relative h-screen">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <ImageOptimized
              src={slides[currentSlide]}
              alt={`마로상회 ${currentSlide === 0 ? '전경' : 
                   currentSlide === 1 ? '매장 입구' : 
                   currentSlide === 2 ? '실내 전경' : 
                   '매장 야경'}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
          </motion.div>
        </AnimatePresence>

        {/* 히어로 콘텐츠 */}
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-white max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              건강한 한식의 미학
            </h1>
            <p className="text-xl md:text-2xl mb-12 font-light">
              정성과 전통이 만나 새로운 맛의 경험을 선사합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/menu"
                className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 
                  transition-all duration-300 transform hover:-translate-y-1 
                  shadow-lg hover:shadow-xl text-lg font-medium group"
              >
                <span className="flex items-center justify-center">
                  메뉴 보기
                  <SparklesIcon className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white 
                  rounded-full hover:bg-white/10 transition-all duration-300 
                  transform hover:-translate-y-1 text-lg font-medium backdrop-blur-sm"
              >
                예약 문의
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 슬라이드 컨트롤 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 
                ${currentSlide === index ? 'bg-white w-8' : 'bg-white/50 w-4'}`}
            />
          ))}
        </div>
      </div>

      {/* 퀵 인포 섹션 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              마로상회의 특별함
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              전통과 현대가 조화를 이루는 공간에서 특별한 한식 경험을 제공합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ClockIcon,
                title: "영업시간",
                description: "매일 11:00 - 20:00",
                detail: "브레이크타임 15:00 - 17:00"
              },
              {
                icon: MapPinIcon,
                title: "오시는 길",
                description: "서울 강동구 암사동",
                detail: "지하철 8호선 암사역 도보 5분"
              },
              {
                icon: PhoneIcon,
                title: "예약문의",
                description: "02-6449-4630",
                detail: "예약 및 포장 주문 가능"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 h-full">
                  <item.icon className="w-12 h-12 text-gray-900 mb-6 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-900 mb-2">{item.description}</p>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 메뉴 프리뷰 섹션 */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              대표 메뉴
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              정성과 전통이 담긴 마로상회의 특별한 메뉴를 소개합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                {item.isLink ? (
                  <Link to="/menu" className="block h-full">
                    <div className="bg-gray-900 rounded-2xl p-8 h-full flex items-center justify-center text-center group-hover:bg-gray-800 transition-all duration-500">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="relative overflow-hidden rounded-2xl aspect-w-16 aspect-h-12">
                    <ImageOptimized
                      src={item.image}
                      alt={`마로상회 ${item.name} - ${item.description}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-200">{item.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 지도 섹션 추가 */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              오시는 길
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              서울 강동구 암사동에 위치한 마로상회를 찾아오시는 길을 안내해드립니다
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={18}
                options={options}
              >
                <Marker 
                  position={center}
                  title="마로상회"
                  icon={{
                    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                    scaledSize: { width: 40, height: 40 }
                  }}
                  label={{
                    text: "마로상회",
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold"
                  }}
                />
              </GoogleMap>
            </LoadScript>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">마로상회</h3>
            <p className="text-gray-600">서울 강동구 암사동</p>
            <p className="text-gray-600">지하철 8호선 암사역 도보 5분</p>
            <a 
              href="https://maps.app.goo.gl/YMW34ErRykarG4G26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-colors duration-300"
            >
              길찾기
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;