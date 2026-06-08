import React, { useState, useEffect } from 'react';

export default function HeroAndSearch() {
  // 1. التحكم في تبويب (للبيع / للايجار)
  const [activeTab, setActiveTab] = useState('sale');
  // 2. التحكم في إظهار وإخفاء خيارات البحث الإضافية
  const [showFilters, setShowFilters] = useState(false);
  
  // 3. كود تقليب الصور التلقائي كل 5 ثوانٍ (منفصل تماماً عن بقية المكونات)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80', // فيلا مودرن 1
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80', // فيلا مودرن 2
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80'  // تصميم داخلي فاخر
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 5000 ملي ثانية = 5 ثوانٍ
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  // مصفوفة الأحياء لمدينة العبور
  const districts = [
    { id: 1, name: 'الحي الأول' }, { id: 2, name: 'الحي الثاني' },
    { id: 3, name: 'الحي الثالث' }, { id: 4, name: 'الحي الرابع' },
    { id: 5, name: 'الحي الخامس' }, { id: 6, name: 'الحي السادس' },
    { id: 7, name: 'الحي السابع' }, { id: 8, name: 'الحي الثامن' },
    { id: 9, name: 'مدينة العبور' }, { id: 10, name: 'العبور الجديدة' }
  ];

  return (
    <div className="relative font-sans antialiased overflow-hidden" style={{ direction: 'rtl' }}>
      
      {/* ==================== قسم الـ HERO (الخلفية المتقلبة المنفصلة) ==================== */}
      <section className="relative h-[620px] md:h-[700px] w-full flex items-center justify-center">
        
        {/* فخامة الـ Slideshow: صور تتبدل بسلاسة وراء الكواليس دون المساس بالنصوص */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}

        {/* طبقة التظليل السينمائي الثابتة فوق الصور لحماية وضوح النصوص */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/25 z-10"></div>
        
        {/* المحتوى النصي: ثابت تماماً ومستقر لا يتحرك مع تقليب الصور */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto transform -translate-y-16">
          <span className="inline-block bg-[#c5a880]/20 text-[#e4cb9f] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5 border border-[#c5a880]/30 backdrop-blur-sm">
            منصة العبور العقارية الأولى
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
            امتلك عقار أحلامك في العبور
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-200/90 font-light max-w-2xl mx-auto drop-shadow-md">
            نجمع لك أرقى الفلل، الشقق، والمساحات التجارية من الملاك مباشرة وبعروض حصرية.
          </p>
        </div>
      </section>

      {/* ==================== صندوق البحث (منفصل وعائم بتأثير زجاجي) ==================== */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-36 md:-mt-44 pb-16">
        <div className="bg-white/95 backdrop-blur-2xl p-6 sm:p-8 rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border border-white/50">
          
          {/* تبويبات البحث المتفاعلة بألوان الهوية الذهبية الفاخرة */}
          <div className="flex space-x-reverse space-x-3 border-b border-slate-100 pb-5 mb-6">
            <button
              onClick={() => setActiveTab('sale')}
              className={`flex items-center space-x-reverse space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'sale'
                  ? 'bg-[#c5a880] text-white shadow-lg shadow-[#c5a880]/30'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>عقارات للبيع</span>
            </button>
            
            <button
              onClick={() => setActiveTab('rent')}
              className={`flex items-center space-x-reverse space-x-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'rent'
                  ? 'bg-[#c5a880] text-white shadow-lg shadow-[#c5a880]/30'
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800'
              }`}
            >
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>عقارات للإيجار</span>
            </button>
          </div>

          {/* استمارة الفلاتر الذكية */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* الحي */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-400 mb-2 mr-1">المنطقة أو الحي</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all cursor-pointer">
                    <option>اختر الحي المناسب...</option>
                    {districts.map((district) => (
                      <option key={district.id} value={district.id}>{district.name}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* النوع */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-400 mb-2 mr-1">نوع العقار</label>
                <div className="relative">
                  <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl px-4 py-3.5 appearance-none focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all cursor-pointer">
                    <option>جميع العقارات</option>
                    <option>شقة سكنية</option>
                    <option>فيلا مستقلة</option>
                    <option>عقار تجاري / إداري</option>
                  </select>
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* الميزانية */}
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-400 mb-2 mr-1">الميزانية القصوى (جنيه)</label>
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c5a880] focus:bg-white transition-all"
                  placeholder="مثال: 3,000,000"
                />
              </div>

            </div>

            {/* الخيارات المتقدمة المنهارة */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-300 ease-in-out overflow-hidden ${showFilters ? 'max-h-[400px] pt-2 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-400 mb-2 mr-1">المساحة الأدنى (م²)</label>
                <input type="number" className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c5a880]" placeholder="مثال: 150" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-400 mb-2 mr-1">سنة الإنشاء</label>
                <input type="number" className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c5a880]" placeholder="2026" />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-400 mb-2 mr-1">كلمات مفتاحية</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#c5a880]" placeholder="تشطيب لوكس، بحري..." />
              </div>
            </div>

            {/* أزرار التحكم السفلى */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100 mt-2">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="text-[#c5a880] hover:text-[#b0936b] text-sm font-bold flex items-center space-x-reverse space-x-2 transition-colors"
              >
                <span>{showFilters ? 'إخفاء الخيارات المتقدمة' : 'خيارات بحث متقدمة'}</span>
                <svg className={`w-4 h-4 transform transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#c5a880] hover:bg-[#b0936b] text-white font-bold text-sm px-10 py-4 rounded-xl shadow-lg shadow-[#c5a880]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>ابدأ البحث الذكي</span>
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  );
}
