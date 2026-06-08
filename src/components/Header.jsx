import React, { useState } from 'react';

export default function Header() {
  // حالة التحكم في قائمة الموبايل المنسدلة
  const [isOpen, setIsOpen] = useState(false);

  // مصفوفة الروابط الديناميكية
  const navigationLinks = [
    { name: 'الرئيسية', href: 'index.html' },
    { name: 'عقاراتنا', href: 'listings.html' },
    { name: 'دليل الاسعار', href: 'elements.html' },
    { name: 'من نحن', href: 'blog.html' },
    { name: 'تواصل معنا', href: 'contact.html' }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md text-slate-800 sticky top-0 z-50 w-full border-b border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.01)] font-sans" style={{ direction: 'rtl' }}>
      {/* الحاوية الرئيسية مفرودة بالكامل على الشاشة */}
      <div className="w-full px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* اليمين: اللوجو لوحده تماماً */}
        <div className="flex-shrink-0">
          <a href="index.html" className="flex items-center">
            <img
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-102"
              src="logo.png" 
              alt="Homely الشعار"
            />
          </a>
        </div>

        {/* المنتصف/اليسار: روابط التنقل (تم فصلها وإضافة mr-24 لتبتعد مسافة كبيرة جداً عن اللوجو) */}
        <nav className="hidden lg:flex items-center space-x-reverse space-x-8 mr-24 ">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 hover:text-[#c5a880] font-bold text-sm transition-colors duration-200 relative after:absolute after:bottom-[-6px] after:right-0 after:w-0 after:h-[2px] after:bg-[#c5a880] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* أقصى اليسار: الأزرار المنسقة الفاخرة للكمبيوتر */}
        <div className="hidden lg:flex items-center space-x-reverse space-x-4">
          {/* زر تسجيل الدخول */}
          <a 
            href="./login.html" 
            className="flex items-center space-x-reverse space-x-2 border-2 border-[#c5a880]/30 hover:border-[#c5a880] text-slate-700 hover:text-[#c5a880] font-bold text-xs px-5 py-2.5 rounded-xl transition-all duration-300 bg-[#c5a880]/5 hover:bg-[#c5a880]/10"
          >
            <svg className="w-4 h-4 ml-1.5 text-[#c5a880]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>تسجيل الدخول</span>
          </a>

          {/* زر أضف عقارك مجاناً */}
          <a
            href="./العميل/Add.html"
            className="bg-[#c5a880] hover:bg-[#b0936b] text-white font-bold text-xs px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            أضف عقارك مجاناً
          </a>
        </div>

        {/* زر الموبايل (Hamburger) في أقصى اليسار على الهواتف */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-slate-600 hover:text-[#c5a880] focus:outline-none p-2 rounded-xl transition-colors"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* قائمة الموبايل المنسدلة النظيفة */}
      <div 
        className={`lg:hidden w-full bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[420px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 py-4 space-y-1 text-right">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-sm text-slate-600 hover:text-[#c5a880] hover:bg-slate-50 font-bold py-3 px-4 rounded-xl transition-all"
            >
              {item.name}
            </a>
          ))}
          
          <div className="pt-4 mt-2 border-t border-slate-100 space-y-2.5">
            <a
              href="./العميل/Add.html"
              className="block text-center bg-[#c5a880] text-white font-bold text-sm p-3 rounded-xl shadow-sm"
            >
              أضف عقارك مجاناً
            </a>
            <a 
              href="./login.html" 
              className="block text-center text-[#c5a880] font-bold p-3 rounded-xl text-sm border-2 border-[#c5a880]/30 bg-[#c5a880]/5"
            >
              تسجيل الدخول لحسابي
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
