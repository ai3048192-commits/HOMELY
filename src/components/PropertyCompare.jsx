import React, { useState } from 'react';
import { FaExchangeAlt, FaBed, FaBath, FaRulerCombined, FaMoneyBillWave, FaMapMarkerAlt, FaTag, FaCreditCard } from 'react-icons/fa';

export default function PropertyCompare() {
  const propertiesData = [
    {
      id: 1,
      title: "فيلا فاخرة - جمعية عرابي",
      location: "العبور الجديدة",
      rooms: 4,
      bathrooms: 4,
      area: "2800 م²",
      price: "28,000,000 ج.م",
      type: "فيلا مستقلة",
      payment: "كاش"
    },
    {
      id: 2,
      title: "فيلا مودرن - هليوبوليس هيلز",
      location: "العبور الجديدة",
      rooms: 3,
      bathrooms: 2,
      area: "227 م²",
      price: "4,000,000 ج.م",
      type: "تاون هاوس",
      payment: "تقسيط"
    },
    {
      id: 3,
      title: "شقة لقطة - الحي الخامس",
      location: "الحى الخامس",
      rooms: 3,
      bathrooms: 2,
      area: "200 م²",
      price: "1,500,000 ج.م",
      type: "شقة دور متكرر",
      payment: "كاش"
    },
    {
      id: 4,
      title: "شقة سكنية - شارع الشباب",
      location: "الحى الثامن",
      rooms: 2,
      bathrooms: 1,
      area: "63 م²",
      price: "750,000 ج.م",
      type: "شقة خلفية",
      payment: "كاش"
    }
  ];

  const [prop1Id, setProp1Id] = useState(1);
  const [prop2Id, setProp2Id] = useState(2);

  const p1 = propertiesData.find(p => p.id === Number(prop1Id)) || propertiesData[0];
  const p2 = propertiesData.find(p => p.id === Number(prop2Id)) || propertiesData[1];

  // دالة مساعدة لرسم صف المقارنة بشكل عصري
  const CompareRow = ({ icon, label, val1, val2, highlight = false }) => (
    <div className={`grid grid-cols-12 gap-4 py-5 px-4 items-center rounded-2xl transition-all border border-transparent ${highlight ? 'bg-[#c5a880]/5 border-[#c5a880]/10' : 'hover:bg-slate-50'}`}>
      {/* القيمة الأولى */}
      <div className={`col-span-5 text-right text-xs md:text-sm font-bold ${highlight ? 'text-slate-900 text-base md:text-lg font-black' : 'text-slate-700'}`}>
        {val1}
      </div>
      
      {/* مسمى الخاصية والأيقونة في المنتصف */}
      <div className="col-span-2 flex flex-col items-center justify-center text-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${highlight ? 'bg-[#c5a880]/20 text-[#c5a880]' : 'bg-slate-100 text-slate-400'}`}>
          {icon}
        </div>
        <span className="text-[10px] md:text-xs font-bold text-slate-400 block whitespace-nowrap">{label}</span>
      </div>

      {/* القيمة الثانية */}
      <div className={`col-span-5 text-left text-xs md:text-sm font-bold ${highlight ? 'text-slate-900 text-base md:text-lg font-black' : 'text-slate-700'}`} style={{ direction: 'ltr' }}>
        {val2}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white border-t border-b border-slate-100 relative" style={{ direction: 'rtl' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* هيدر القسم الفخم */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#c5a880]/10 border border-[#c5a880]/20 px-4 py-1.5 rounded-full mb-3">
            <FaExchangeAlt className="text-[#c5a880] text-xs" />
            <span className="text-[#c5a880] text-xs font-black uppercase tracking-wider">ميزة ذكية وحصرية</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            المقارن العقاري المتطور
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto font-light leading-relaxed">
            محتار بين عروض العبور؟ حدد عقارين الآن وشاهد الفروق الجوهرية بوضوح تام لتضمن الاختيار الأصح ميزانياً ومعيشياً.
          </p>
        </div>

        {/* لوحة التحكم والاختيار الديناميكي */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 mb-12 bg-slate-950 p-6 md:p-8 rounded-3xl shadow-xl border border-slate-900 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#c5a880]/5 rounded-full blur-xl pointer-events-none" />
          
          {/* اختيار العقار الأول */}
          <div className="text-right z-10">
            <label className="block text-[11px] font-black text-[#c5a880] uppercase tracking-wider mb-2.5">العقار الأول الأساسي:</label>
            <div className="relative">
              <select 
                value={prop1Id} 
                onChange={(e) => setProp1Id(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white text-xs md:text-sm font-bold rounded-xl p-3.5 focus:outline-none focus:border-[#c5a880] appearance-none cursor-pointer"
              >
                {propertiesData.map(p => (
                  <option key={p.id} value={p.id} disabled={p.id === Number(prop2Id)} className="bg-slate-950 text-white">{p.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* اختيار العقار الثاني */}
          <div className="text-right z-10">
            <label className="block text-[11px] font-black text-[#c5a880] uppercase tracking-wider mb-2.5">العقار الثاني للمقارنة:</label>
            <div className="relative">
              <select 
                value={prop2Id} 
                onChange={(e) => setProp2Id(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 text-white text-xs md:text-sm font-bold rounded-xl p-3.5 focus:outline-none focus:border-[#c5a880] appearance-none cursor-pointer"
              >
                {propertiesData.map(p => (
                  <option key={p.id} value={p.id} disabled={p.id === Number(prop1Id)} className="bg-slate-950 text-white">{p.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* كادر العرض والمقارنة الانسيابي الجديد */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-4 md:p-8 space-y-3 relative">
          
          {/* هيدر كروت المقارنة */}
          <div className="grid grid-cols-12 gap-4 pb-6 border-b border-slate-100 items-center">
            <div className="col-span-5 text-right">
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md font-bold inline-block mb-1">العقار A</span>
              <h4 className="text-sm md:text-base font-black text-slate-900 line-clamp-1">{p1.title}</h4>
            </div>
            <div className="col-span-2 flex justify-center">
              <div className="w-10 h-10 bg-[#c5a880]/10 rounded-full flex items-center justify-center border border-[#c5a880]/20 text-[#c5a880]">
                <FaExchangeAlt className="text-sm animate-pulse" />
              </div>
            </div>
            <div className="col-span-5 text-left" style={{ direction: 'ltr' }}>
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md font-bold inline-block mb-1">العقار B</span>
              <h4 className="text-sm md:text-base font-black text-slate-900 line-clamp-1 text-right">{p2.title}</h4>
            </div>
          </div>

          {/* محتوى المقارنات الذكي بالتوالي */}
          <div className="pt-4 space-y-2">
            
            <CompareRow 
              icon={<FaMoneyBillWave />} 
              label="السعر المطلوب" 
              val1={p1.price} 
              val2={p2.price} 
              highlight={true} 
            />

            <CompareRow 
              icon={<FaMapMarkerAlt />} 
              label="المنطقة / الحي" 
              val1={p1.location} 
              val2={p2.location} 
            />

            <CompareRow 
              icon={<FaRulerCombined />} 
              label="المساحة الإجمالية" 
              val1={p1.area} 
              val2={p2.area} 
            />

            <CompareRow 
              icon={<FaBed />} 
              label="عدد الغرف" 
              val1={`${p1.rooms} غرف`} 
              val2={`${p2.rooms} غرف`} 
            />

            <CompareRow 
              icon={<FaBath />} 
              label="دورات المياه" 
              val1={`${p1.bathrooms} حمامات`} 
              val2={`${p2.bathrooms} حمامات`} 
            />

            <CompareRow 
              icon={<FaTag />} 
              label="تصنيف العقار" 
              val1={p1.type} 
              val2={p2.type} 
            />

            <CompareRow 
              icon={<FaCreditCard />} 
              label="نظام الدفع" 
              val1={
                <span className={`px-3 py-1 rounded-full text-xs font-black ${p1.payment === 'كاش' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                  {p1.payment}
                </span>
              } 
              val2={
                <span className={`px-3 py-1 rounded-full text-xs font-black ${p2.payment === 'كاش' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                  {p2.payment}
                </span>
              } 
            />

          </div>

          {/* أزرار اتخاذ القرار السريعة بأسفل كادر المقارنة */}
          <div className="grid grid-cols-12 gap-4 pt-6 border-t border-slate-100 items-center">
            <div className="col-span-5 text-right">
              <button className="w-full bg-slate-900 hover:bg-[#c5a880] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-sm">
                معاينة العقار A
              </button>
            </div>
            <div className="col-span-2 text-center text-xs font-bold text-slate-300">أو</div>
            <div className="col-span-5 text-left">
              <button className="w-full bg-slate-900 hover:bg-[#c5a880] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-sm">
                معاينة العقار B
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}