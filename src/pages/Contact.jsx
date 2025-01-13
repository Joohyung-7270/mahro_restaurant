import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src="/out3.jpg" 
            alt="마로상회 전경" 
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">문의하기</h1>
            <p className="text-xl md:text-2xl font-light">
              언제든 편하게 연락주세요
            </p>
          </motion.div>
        </div>
      </div>

      {/* 연락처 정보 섹션 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: PhoneIcon,
                title: '전화',
                content: '02-6449-4630',
                detail: '언제든 전화주세요'
              },
              {
                icon: MapPinIcon,
                title: '위치',
                content: '서울특별시 강동구 상암로 24, 1층',
                detail: '지하철 8호선 암사역 도보 5분'
              },
              {
                icon: ClockIcon,
                title: '영업시간',
                content: '매일 11:00 - 20:00',
                detail: '브레이크타임 15:00 - 17:00'
              },
              {
                icon: EnvelopeIcon,
                title: '이메일',
                content: 'contact@maro.com',
                detail: '24시간 내 답변드립니다'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-rose-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{item.content}</p>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* 지도 섹션 - 업데이트 */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* 지도 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-[500px] lg:h-[600px]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1851851862447!2d127.12922827677598!3d37.55449397203739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cb0a3af2b2a6d%3A0x1e1d4a4c96e0c98d!2z66eI66Gc7IOB7ZqM!5e0!3m2!1sko!2skr!4v1710837431316!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="마로상회 위치"
                className="w-full h-full"
              ></iframe>
            </motion.div>

            {/* 위치 정보 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-bold mb-6">오시는 길</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">주소</h4>
                  <p className="text-gray-600">서울특별시 강동구 상암로 24, 1층</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">지하철</h4>
                  <p className="text-gray-600">8호선 암사역 도보 5분</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">버스</h4>
                  <p className="text-gray-600">
                    암사역 정류장<br />
                    간선: 340, 3411<br />
                    지선: 3311, 3411
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">주차</h4>
                  <p className="text-gray-600 text-red-600">주차 공간이 없습니다</p>
                  <p className="text-gray-500 text-sm mt-1">
                    근처 공영주차장을 이용해 주시기 바랍니다
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 문의 폼 - 간격 조정 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              문의하기
            </h2>
            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  문의내용
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  placeholder="문의하실 내용을 입력해주세요."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-rose-600 text-white rounded-xl hover:bg-rose-700 
                    transition-all duration-300 transform hover:-translate-y-1 
                    shadow-lg hover:shadow-xl text-lg font-medium"
                >
                  문의하기
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 