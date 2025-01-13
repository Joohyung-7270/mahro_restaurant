import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FireIcon, SparklesIcon } from '@heroicons/react/24/outline';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('현장식사');

  const categories = ['현장식사', '사리추가', '포장'];
  
  const menuItems = {
    '현장식사': [
      {
        name: '한우 우거지탕',
        price: 10000,
        description: '신선한 한우와 우거지를 넣고 푹 끓인 건강식',
        image: '/foodcow_in.JPG',
        isSignature: true
      },
      {
        name: '부대찌개',
        price: 11000,
        description: '2인 이상 주문 가능',
        image: '/ham1.jpg',
        isSignature: true
      }
    ],
    '사리추가': [
      {
        name: '음료수',
        price: 2000,
        image: '/drink.jpg'
      },
      {
        name: '라면사리',
        price: 1000,
        image: '/noodles.jpg'
      },
      {
        name: '모둠 햄사리',
        price: 6000,
        image: '/ham1.jpg'
      }
    ],
    '포장': [
      {
        name: '한우우거지탕',
        price: 16000,
        description: '포장용기 포함',
        image: '/foodcow_in.JPG'
      },
      {
        name: '부대찌개',
        price: 16000,
        description: '포장용기 포함',
        image: '/ham1.jpg'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="/foodcow_in.JPG" 
            alt="대표 메뉴" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">메뉴 소개</h1>
            <p className="text-xl md:text-2xl font-light">
              정성과 맛이 가득한 마로상회의 메뉴
            </p>
          </motion.div>
        </div>
      </div>

      {/* 메뉴 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 카테고리 선택 */}
          <div className="flex justify-center mb-16 space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-lg transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-rose-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 메뉴 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {menuItems[activeCategory].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white">
                    <div className="aspect-w-16 aspect-h-12">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {item.isSignature && (
                      <div className="absolute top-4 right-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        <SparklesIcon className="w-4 h-4 mr-1" />
                        시그니처
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <span className="text-rose-600 font-bold">
                          {item.price.toLocaleString()}원
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* 비디오 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
              <FireIcon className="w-8 h-8 text-rose-600 mr-2" />
              마로상회 음식은 이렇게 따듯합니다
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <video controls className="w-full max-w-4xl mx-auto">
                <source src="/ham_movie.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* 안내사항 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-4">안내사항</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2" />
                가격은 부가세 포함입니다.
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2" />
                메뉴는 상황에 따라 변경될 수 있습니다.
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2" />
                포장 주문은 전화로 미리 예약해 주시면 감사하겠습니다.
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-rose-600 rounded-full mr-2" />
                알레르기 관련 문의는 직원에게 말씀해 주세요.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Menu; 