import React from 'react';
import { FaShieldAlt, FaHandHoldingHeart, FaBuilding, FaHeadset } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-2xl transition-colors duration-300 group-hover:text-white" />,
      title: "أمان ومصداقية كاملة",
      desc: "نضمن لك صحة الأوراق القانونية والملكية لجميع العقارات المعروضة لدينا بالكامل."
    },
    {
      id: 2,
      icon: <FaHandHoldingHeart className="text-2xl transition-colors duration-300 group-hover:text-white" />,
      title: "بدون عمولات مخفية",
      desc: "شفافية مطلقة في التعامل وأسعار حقيقية مباشرة من الملاك والمطورين دون وسيط."
    },
    {
      id: 3,
      icon: <FaBuilding className="text-2xl transition-colors duration-300 group-hover:text-white" />,
      title: "تنوع عقاري واسع",
      desc: "خيارات تبدأ من الشقق الاقتصادية المتميزة إلى الفيلات الفاخرة في أرقى أحياء العبور."
    },
    {
      id: 4,
      icon: <FaHeadset className="text-2xl transition-colors duration-300 group-hover:text-white" />,
      title: "استشارات مجانية",
      desc: "فريق استشاري متخصص متواجد على مدار الساعة لمساعدتك في اختيار عقارك الأنسب."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-neutral-950 text-white overflow-hidden relative" style={{ direction: 'rtl' }}>
      
      {/* لمسات ديكورية فخمة في الخلفية (إضاءة خافتة) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* الجانب الأيمن: النص التسويقي الثابت والفخم */}
          <div className="lg:col-span-5 text-right space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#c5a880]/10 border border-[#c5a880]/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse"></span>
              <span className="text-[#c5a880] text-xs font-black uppercase tracking-wider">لماذا نحن الخيار الأول؟</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.25] tracking-tight">
              نوفر لك تجربة بحث عقاري <br />
              <span className="text-[#c5a880] relative inline-block">
                آمنة وسهلة
                <span className="absolute bottom-2 left-0 w-full h-[6px] bg-[#c5a880]/25 -z-10 rounded-full"></span>
              </span>
            </h2>
            
            <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
              نحن لسنا مجرد منصة لعرض العقارات، بل شريكك الموثوق في مدينة العبور لتأمين مستقبلك السكني والاستثماري بخطوات مدروسة وبدون أي مخاطر.
            </p>

            <div className="pt-4 flex items-center gap-6 border-t border-slate-800">
              <div>
                <span className="block text-2xl font-black text-white tracking-tight">100%</span>
                <span className="text-xs text-slate-500 font-medium">أوراق قانونية معتمدة</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="block text-2xl font-black text-white tracking-tight">+1500</span>
                <span className="text-xs text-slate-500 font-medium">عميل يثق بنا</span>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: شبكة الكروت التفاعلية الحديثة */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item) => (
              <div 
                key={item.id} 
                className="group p-8 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800 hover:border-[#c5a880]/40 hover:bg-slate-900/90 transition-all duration-500 text-right flex flex-col justify-between h-[230px] shadow-sm hover:shadow-[0_20px_50px_rgba(197,168,128,0.05)] relative overflow-hidden"
              >
                {/* تأثير خلفية الكرت عند الـ Hover */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-[#c5a880]/5 rounded-full blur-2xl group-hover:bg-[#c5a880]/10 transition-all duration-500" />

                <div>
                  {/* حاوية الأيقونة الذكية */}
                  <div className="w-12 h-12 bg-slate-950 rounded-2xl flex items-center justify-center text-[#c5a880] border border-slate-800 shadow-inner mb-5 group-hover:bg-[#c5a880] group-hover:border-[#c5a880] transition-all duration-500 ease-out transform group-hover:rotate-6">
                    {item.icon}
                  </div>
                  
                  {/* العنوان */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide group-hover:text-[#c5a880] transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                {/* الوصف الإيضاحي */}
                <p className="text-xs text-slate-400 font-light leading-relaxed mb-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}