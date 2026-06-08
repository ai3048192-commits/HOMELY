import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp, FaChevronLeft } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200/60 text-slate-700 pt-16 pb-8 font-sans" style={{ direction: 'rtl' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الشبكة الرئيسية للفوتر */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 text-right">
          
          {/* العمود الأول: نبذة عن الشركة واللوجو */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-black text-slate-900 tracking-tight">
              العبور<span className="text-[#c5a880]"> سنترال</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed max-w-sm">
              مستشارك العقاري الأول والأكثر أماناً في مدينة العبور. نقدم لك أفضل الشقق، الفيلات، والفرص الاستثمارية الحقيقية مباشرة من الملاك بأعلى عوائد ممكنة.
            </p>
            {/* أيقونات السوشيال ميديا بتأثير Hover مرن */}
            <div className="flex gap-2 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                <FaFacebookF className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#c5a880] hover:text-white hover:border-[#c5a880] transition-all">
                <FaInstagram className="text-xs" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">
                <FaWhatsapp className="text-xs" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة للموقع */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-r-2 border-[#c5a880] pr-2">تصفح سريع</h4>
            <ul className="space-y-2 text-xs font-bold text-slate-500">
              <li>
                <a href="#" className="hover:text-[#c5a880] flex items-center gap-1 transition-colors group">
                  <FaChevronLeft className="text-[9px] text-slate-300 group-hover:text-[#c5a880] transition-colors" /> العقارات المميزة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a880] flex items-center gap-1 transition-colors group">
                  <FaChevronLeft className="text-[9px] text-slate-300 group-hover:text-[#c5a880] transition-colors" /> مؤشر نبض السوق
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a880] flex items-center gap-1 transition-colors group">
                  <FaChevronLeft className="text-[9px] text-slate-300 group-hover:text-[#c5a880] transition-colors" /> رادار العقارات
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a880] flex items-center gap-1 transition-colors group">
                  <FaChevronLeft className="text-[9px] text-slate-300 group-hover:text-[#c5a880] transition-colors" /> آراء عملائنا
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: بيانات التواصل الموثقة للعبور */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-r-2 border-[#c5a880] pr-2">معلومات التواصل</h4>
            <ul className="space-y-3 text-xs font-medium text-slate-500">
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[#c5a880]">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <span>شارع الشباب، بجوار جهاز مدينة العبور</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[#c5a880]">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <span style={{ direction: 'ltr' }}>+20 100 000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-100 border border-slate-200/60 flex items-center justify-center text-[#c5a880]">
                  <FaEnvelope className="text-xs" />
                </div>
                <span>info@obourcentral.com</span>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية الذكية */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider border-r-2 border-[#c5a880] pr-2">النشرة العقارية</h4>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              اشترك معنا لتصلك أحدث الفرص واللقطات العقارية الحصرية بمدينة العبور قبل نشرها للعامة.
            </p>
            <div className="flex gap-1">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="w-full bg-white border border-slate-200 text-xs rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#c5a880] text-right"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-black text-xs px-4 rounded-xl transition-colors">
                انضمام
              </button>
            </div>
          </div>

        </div>

        {/* الشريط السفلي الأخير لحقوق الملكية */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-medium">
          <p>© {currentYear} العبور سنترال. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-slate-600 transition-colors">الشروط والأحكام</a>
          </div>
        </div>

      </div>
    </footer>
  );
}