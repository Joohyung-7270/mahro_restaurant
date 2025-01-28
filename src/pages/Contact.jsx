import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import ImageOptimized from '../components/ImageOptimized';
import { getImageUrl } from '../config/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    phone_number: '',
    message: '',
    template_html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Maro Sanghoe Inquiry</title>
      </head>
      <body>
        <div style="max-width: 700px; margin: 40px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); border: 1px solid #ddd;">
          <div style="background: linear-gradient(90deg, #d62828, #a51f1f); color: #fff; text-align: center; padding: 30px; font-size: 28px; font-weight: bold; letter-spacing: 1px;">
            마로상회 문의하기 🥘
          </div>
          <div style="padding: 30px; color: #555;">
            <p>안녕하세요 마로상회 담당자님,</p>
            <p>새로운 문의가 도착했습니다:</p>
            <div style="padding: 20px; border-left: 5px solid #d62828; font-style: italic; background: #fdf2f2; margin: 20px 0; border-radius: 8px;">
              <p><strong>이름:</strong> {{from_name}}</p>
              <p><strong>연락처:</strong> {{phone_number}}</p>
              <p><strong>문의내용:</strong></p>
              <p>{{message}}</p>
            </div>
            <p>
              빠른 답변 부탁드립니다. 감사합니다! 🌟
            </p>
          </div>
          <div style="text-align: center; padding: 20px; background: #f1f1f1; font-size: 14px; color: #666; border-top: 1px solid #ddd;">
            마로상회를 이용해 주셔서 감사합니다.<br>
            – 마로상회 팀
          </div>
        </div>
      </body>
      </html>
    `
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      ...formData,
      content: `
        이름: ${formData.from_name}
        연락처: ${formData.phone_number}
        문의내용: ${formData.message}
      `,
      html: formData.template_html
        .replace('{{from_name}}', formData.from_name)
        .replace('{{phone_number}}', formData.phone_number)
        .replace('{{message}}', formData.message)
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      alert('문의가 성공적으로 전송되었습니다!');
      setFormData({
        from_name: '',
        phone_number: '',
        message: '',
        template_html: formData.template_html
      });
    })
    .catch((error) => {
      alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">문의하기</h2>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              이름:
            </label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              연락처:
            </label>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              문의내용:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-rose-600 text-white py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors duration-300"
          >
            문의하기
          </button>
        </form>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          <ImageOptimized
            src={getImageUrl('/drink.jpg')}
            alt="음료"
            className="w-full h-48 object-cover rounded-lg"
          />
          <ImageOptimized
            src={getImageUrl('/noodles.jpg')}
            alt="면요리"
            className="w-full h-48 object-cover rounded-lg"
          />
          <ImageOptimized
            src={getImageUrl('/interior1.JPG')}
            alt="내부1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <ImageOptimized
            src={getImageUrl('/out1.jpg')}
            alt="외부1"
            className="w-full h-48 object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 