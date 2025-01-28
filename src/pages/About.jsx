import { motion } from 'framer-motion';
import { MapPinIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline';
import ImageOptimized from '../components/ImageOptimized';
import { getImageUrl } from '../config/constants';

function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <ImageOptimized
            src={getImageUrl('/interior1.JPG')}
            alt="마로상회 내부"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">사업소개</h1>
            <p className="text-xl md:text-2xl font-light">
              정성과 전통이 담긴 마로상회의 이야기
            </p>
          </motion.div>
        </div>
      </div>

      {/* 소개 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              마로상회는 <span className="text-rose-600">정성</span>을 담습니다
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              서울 강동구 암사동에 위치한 마로상회는 따뜻하고 진심이 담긴 한식 요리를 선보이는 한식 전문점입니다.
              모든 요리에 건강과 정성을 담아 고객에게 특별한 식사 경험을 선사합니다.
            </p>
          </motion.div>

          {/* 가치 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <HeartIcon className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">정성을 담다</h3>
              <p className="text-gray-600">
                한 그릇 한 그릇 정성을 다해 준비하는 집밥 같은 맛
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <MapPinIcon className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">최적의 위치</h3>
              <p className="text-gray-600">
                강동구 암사동의 중심에서 여러분을 맞이합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <ClockIcon className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">편리한 이용</h3>
              <p className="text-gray-600">
                매일 11시부터 20시까지 여러분을 기다립니다
              </p>
            </motion.div>
          </div>

          {/* 갤러리 섹션 */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ImageOptimized
                src={getImageUrl('/interior1.JPG')}
                alt="내부 전경 1"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <ImageOptimized
                src={getImageUrl('/out1.jpg')}
                alt="외부 전경"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            <div className="space-y-8 mt-8 md:mt-16">
              <ImageOptimized
                src={getImageUrl('/interior2.jpg')}
                alt="내부 전경 2"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <ImageOptimized
                src={getImageUrl('/out4.jpg')}
                alt="외부 전경 2"
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About; 