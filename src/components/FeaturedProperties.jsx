import React, { useState, useEffect } from 'react';
import { FaBath, FaBed, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa'; // استيراد الأيقونات المضمونة

export default function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // مصفوفة البيانات بالعناوين المختصرة والراقية
  const properties = [
    {
      id: 1,
      title: "فيلا فاخرة بمساحة 2800م",
      description: "فيلا خاصة للبيع بجمعية أحمد عرابي، الغرود الغربية جاهزه للمعيشة الارض 2800 متر مربع تشطيب سوبر لوكس...",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      badge: "للبيع",
      location: "العبور الجديدة",
      bathrooms: 4,
      rooms: 4,
      area: "2800 م²",
      price: "28,000,000 جنيه",
    },
    {
      id: 2,
      title: "فيلا مودرن بالتقسيط",
      description: "فيلا بكمبوند هليوبوليس هيلز العبور 227 متر مبانى ارضى واول وروف وجنينه اماميه وخلفيه دبل فيس...",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      badge: "للبيع",
      location: "العبور الجديدة",
      bathrooms: 2,
      rooms: 3,
      area: "227 م²",
      price: "4,000,000 جنيه",
    },
    {
      id: 3,
      title: "شقة لقطة بالحي الخامس",
      description: "شقة للبيع استلاف فورى ف أرقى أحياء العبور الحى الخامس فيلات قريبة جدا من الخدمات فيو أمامى وخلفى...",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      badge: "للبيع",
      location: "الحى الخامس",
      bathrooms: 2,
      rooms: 3,
      area: "200 م²",
      price: "1,500,000 جنيه",
    },
    {
      id: 4,
      title: "شقة سكنية بشارع الشباب",
      description: "شقه لقطة فى شارع الظاهر بيبرس الرئيسى من شارع الشباب - الحى الثامن مدينة العبور محاطة بجميع الخدمات...",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      badge: "للبيع",
      location: "الحى الثامن",
      bathrooms: 1,
      rooms: 2,
      area: "63 م²",
      price: "750,000 جنيه",
    },
    {
      id: 5,
      title: "فيلا ملكية بالحي السادس",
      description: "فيلا للبيع مدينة العبور الحى السادس 620 متر بجوار الخدمات مكونة من بدروم و دورين اربع شقق مطلو...",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      badge: "للبيع",
      location: "الحى السادس",
      bathrooms: 9,
      rooms: 20,
      area: "620 م²",
      price: "12,000,000 جنيه",
    },
    {
      id: 6,
      title: "شقة بفيو على حدائق عرابي",
      description: "فرصه حقيقيه شقه للبيع من المالك مباشره ب فيو مباشره امام قصور وحدائق جمعيه عرابي يعني فيو مميز...",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      badge: "للبيع",
      location: "الحى السابع",
      bathrooms: 3,
      rooms: 3,
      area: "190 م²",
      price: "3,000,000 جنيه",
    }
  ];

  // تأثير التمرير التلقائي الذكي لعرض 3 كروت في كل مرة
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // يقف التمرير عند آخر مجموعة متناسقة (طول المصفوفة - 3 كروت معروضة)
        if (prevIndex + 3 >= properties.length) {
          return 0; // يرجع للبداية بسلاسة
        }
        return prevIndex + 1;
      });
    }, 3000); // يتحرك تلقائياً كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, [properties.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100/50 overflow-hidden" id="property" style={{ direction: 'rtl' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* هيدر القسم */}
        <div className="text-center mb-16">
          <span className="text-[#c5a880] text-xs font-bold tracking-widest uppercase bg-[#c5a880]/10 px-4 py-2 rounded-full inline-block mb-3">
            ✨ عروضنا المختارة بعناية
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            عقارات متميزة وحصرية بالعبور
          </h2>
          <p className="text-slate-500 text-sm mt-3 font-light">يتم التحديث والتمرير تلقائياً لعرض أفضل الفرص السكنية</p>
        </div>

        {/* كادر العرض الرئيسي المقاوم للسكرول الخارجي */}
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{ transform: `translateX(${currentIndex * (100 / 3)}%)` }}
          >
            {properties.map((item) => (
              <div 
                key={item.id} 
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                
                {/* الصورة المربعة الشبه الثابتة */}
                <div className="relative overflow-hidden aspect-square w-full bg-slate-50">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  <span className="absolute top-4 right-4 bg-[#c5a880] text-white text-xs font-bold px-4 py-1.5 rounded-lg shadow-md tracking-wide">
                    {item.badge}
                  </span>
                  
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-3 py-2 rounded-xl flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#c5a880]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* المحتوى والبيانات الفخمة */}
                <div className="p-6 flex flex-col flex-grow text-right">
                  <h4 className="text-lg font-bold text-slate-800 line-clamp-1 mb-2 hover:text-[#c5a880] transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-slate-400 font-normal line-clamp-2 mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* شبكة الأيقونات المضمونة من مكتبة react-icons */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-1 bg-slate-50 rounded-xl mb-5 border border-slate-100 text-center">
                    
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs font-extrabold text-slate-800">{item.bathrooms}</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-1 font-medium">
                        <FaBath className="text-[#c5a880]" /> حمام
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center border-x border-slate-200">
                      <span className="text-xs font-extrabold text-slate-800">{item.rooms}</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-1 font-medium">
                        <FaBed className="text-[#c5a880]" /> غرف
                      </span>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <span className="text-xs font-extrabold text-slate-800">{item.area}</span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-1 font-medium">
                        <FaRulerCombined className="text-[#c5a880]" /> مساحة
                      </span>
                    </div>

                  </div>

                  {/* شريط السعر النهائي والدخول للتفاصيل */}
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-slate-400 font-bold mb-0.5">السعر المطلوب</span>
                      <span className="text-base font-black text-slate-900 tracking-tight">{item.price}</span>
                    </div>
                    
                    <button className="bg-slate-900 hover:bg-[#c5a880] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                      تفاصيل العقار
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}