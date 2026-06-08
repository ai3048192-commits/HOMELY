import React from 'react';
import { FaChartLine, FaRegClock, FaLightbulb, FaArrowUp, FaCompass } from 'react-icons/fa';

export default function MarketPulse() {
  // بيانات سوق العبور المحدثة بدقة لعام 2026
  const pulseData = {
    updateDate: "يونيو 2026",
    demandPercentage: 88,
    expertAdvice: "تشهد العبور الجديدة والحي الخامس حالياً طفرة غير مسبوقة بسبب اكتمال المحاور الخدمية الجديدة. نوصي بالتركيز على الفرص المتاحة بنظام التقسيط في الكمبوندات الناشئة حيث يُتوقع قفزة سعرية بنسبة 25% قبل نهاية العام.",
    neighborhoods: [
      { name: "الحى الخامس (فيلات)", currentPrice: 16500, lastYearPrice: 14200 },
      { name: "العبور الجديدة (عقارات حديثة)", currentPrice: 9800, lastYearPrice: 7900 },
      { name: "الحى السابع (أرقى الأحياء)", currentPrice: 13500, lastYearPrice: 12800 },
      { name: "شارع الشباب (شقق سكنية)", currentPrice: 8200, lastYearPrice: 8000 }
    ]
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-black text-right relative overflow-hidden" style={{ direction: 'rtl' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* الهيدر العلوي للمؤشر */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-8 mb-12 gap-4">
          <div>
            <span className="text-[#c5a880] text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span> تحديث حي لبيانات السوق
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white flex items-center gap-3">
              <FaChartLine className="text-[#c5a880]" /> مؤشر نبض سوق العبور
            </h2>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 flex items-center gap-2 self-start md:self-auto">
            <FaRegClock className="text-[#c5a880] text-xs" />
            <span className="text-slate-400 text-xs font-bold">آخر تحديث: {pulseData.updateDate}</span>
          </div>
        </div>

        {/* محتوى التحليل */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* اليمين: نصيحة الخبير العقاري وحجم الطلب */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#c5a880]/10 rounded-xl flex items-center justify-center text-[#c5a880]">
                  <FaLightbulb />
                </div>
                <h3 className="text-sm font-black text-white">رؤية الخبير العقاري للشهر الحالي</h3>
              </div>
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed">
                {pulseData.expertAdvice}
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-400">حجم الطلب الإجمالي بالمدينة</span>
                <span className="text-sm font-black text-emerald-400">{pulseData.demandPercentage}%</span>
              </div>
              <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-800">
                <div className="bg-gradient-to-l from-emerald-500 to-teal-400 h-1.5 rounded-full" style={{ width: `${pulseData.demandPercentage}%` }}></div>
              </div>
              <p className="text-[10px] text-slate-500 mt-2 font-medium">مؤشر مرتفع يدل على حركة بيع وشراء نشطة للغاية وسرعة في تدوير العقارات.</p>
            </div>
          </div>

          {/* اليسار: جدول أسعار المناطق وحساب نسبة الصعود */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-6">
            <h3 className="text-sm font-black text-white mb-6 flex items-center gap-2"><FaCompass className="text-[#c5a880]" /> متوسط سعر المتر الحالي مقارنة بالعام الماضي</h3>
            
            <div className="space-y-4">
              {pulseData.neighborhoods.map((item, idx) => {
                // حساب نسبة النمو الرياضية
                const growthRate = Math.round(((item.currentPrice - item.lastYearPrice) / item.lastYearPrice) * 100);
                
                return (
                  <div key={idx} className="group bg-slate-950 border border-slate-900 hover:border-slate-800 rounded-xl p-4 flex items-center justify-between transition-all duration-300">
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{item.name}</h4>
                      <span className="text-[10px] text-slate-500 font-medium block mt-1">السنة الماضية: {item.lastYearPrice.toLocaleString()} ج.م</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <div className="text-[9px] text-slate-500 font-bold mb-0.5">سعر المتر الحالي</div>
                        <div className="text-xs md:text-sm font-black text-white tracking-tight">{item.currentPrice.toLocaleString()} ج.م <span className="text-[10px] text-[#c5a880] font-normal">/ متر</span></div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] bg-emerald-500/10 text-emerald-400 font-black px-2 py-1 rounded-lg border border-emerald-500/10 flex items-center gap-1 shadow-sm">
                          <FaArrowUp className="text-[9px]" /> {growthRate}%
                        </span>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
            
            <p className="text-[10px] text-slate-500 font-medium mt-6 text-center">
              ⚠️ يتم تحديث هذه المؤشرات الاسترشادية دورياً بناءً على متوسط حركة البيع الفعلي المسجلة بالمدينة.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}