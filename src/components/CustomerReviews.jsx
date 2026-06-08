import React, { useState } from 'react';
import { FaStar, FaPaperPlane, FaHeart, FaSmile, FaCheckCircle } from 'react-icons/fa';

export default function CustomerReviews() {
  // 1. البيانات الافتراضية للتعليقات
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "المستشار هشام طلعت",
      role: "حي الفيلات",
      comment: "سرعة استجابة مذهلة ومصداقية تامة في التعامل. قمنا بمعاينة الفيلا وتوقيع العقود وفحص الموقف المالي في جهاز مدينة العبور خلال 48 ساعة فقط. تجربة استثنائية.",
      rating: 5,
      date: "الآن"
    },
    {
      id: 2,
      name: "أ.د. nادية السيوفي",
      role: "العبور الجديدة",
      comment: "فريق محترف يمتلك رؤية تحليلية ممتازة للسوق. نصحوني بالاستثمار في الشقق السكنية الحديثة، وبالفعل العائد الاستثماري الحالي فاق توقعاتي بكثير.",
      rating: 5,
      date: "منذ أسبوع"
    }
  ]);

  // 2. حالات الإدخال والتقييم
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name,
      role: role.trim() ? role : "متابع للموقع",
      comment: comment,
      rating: rating,
      date: "الآن"
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setRole('');
    setComment('');
    setRating(5);
  };

  return (
    <section className="py-24 bg-white text-slate-800 relative overflow-hidden font-sans border-t border-slate-100" style={{ direction: 'rtl' }}>
      
      {/* خلفية جمالية ناعمة جداً بدوائر ضبابية فاتحة */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-100 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* هيدر السكشن بنظام الـ Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-100 pb-8 mb-16 gap-4">
          <div className="text-right">
            <span className="text-[#c5a880] text-xs font-black uppercase tracking-widest block mb-2">
              تقييمات حية
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
              نبض الثقة في <span className="text-[#c5a880]">مجتمعنا العقاري</span>
            </h2>
          </div>
          <p className="text-slate-500 text-xs md:text-sm max-w-md leading-relaxed font-medium">
            آراء وتجارب واقعية يشاركها معنا الملاك والمستثمرون في مختلف أحياء مدينة العبور.
          </p>
        </div>

        {/* شبكة التقسيم الكلية */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* الجانب الأيمن: عرض المراجعات بشكل شبكي منساب ونظيف (No Borders, Light Cards) */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {reviews.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* النجوم والوقت */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-xs ${i < item.rating ? 'text-amber-400' : 'text-slate-200'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold">{item.date}</span>
                    </div>

                    {/* نص التعليق */}
                    <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-6 group-hover:text-slate-900 transition-colors">
                      "{item.comment}"
                    </p>
                  </div>

                  {/* بيانات صاحب المراجعة */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-slate-100 text-[#c5a880] rounded-full flex items-center justify-center font-black text-xs border border-slate-200/40">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-900 flex items-center gap-1">
                          {item.name}
                          <FaCheckCircle className="text-emerald-500 text-[10px]" title="حساب موثق" />
                        </h4>
                        <span className="text-[10px] text-slate-400 font-bold block mt-0.5">{item.role}</span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* الجانب الأيسر: فورم إضافة المراجعة بتصميم فاتح أنيق ومدجج بالأيقونات */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-6">
            
            <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-6 backdrop-blur-sm shadow-sm">
              <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FaHeart className="text-[#c5a880] text-xs" /> يسعدنا سماع تجربتك
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                
                {/* النجوم التفاعلية */}
                <div className="flex items-center justify-between bg-white border border-slate-200/60 rounded-xl p-3">
                  <span className="text-[11px] text-slate-500 font-bold flex items-center gap-1">
                    <FaSmile className="text-slate-400 text-xs" /> ضع تقييمك:
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none transition-transform active:scale-90"
                      >
                        <FaStar className={`text-sm cursor-pointer ${star <= (hoverRating || rating) ? 'text-amber-400' : 'text-slate-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* الاسم */}
                <input 
                  type="text"
                  placeholder="الاسم بالكامل"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-slate-200/80 focus:border-[#c5a880] text-slate-900 font-bold text-xs rounded-xl p-3.5 focus:outline-none transition-all text-right"
                  required
                />

                {/* الحي أو المنطقة */}
                <input 
                  type="text"
                  placeholder="الحي أو المنطقة التابع لها بالعقاد"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-white border border-slate-200/80 focus:border-[#c5a880] text-slate-900 font-bold text-xs rounded-xl p-3.5 focus:outline-none transition-all text-right"
                />

                {/* نص المراجعة */}
                <textarea 
                  rows="3"
                  placeholder="اكتب هنا بضع كلمات تعبر عن تجربتك العقارية معنا..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-white border border-slate-200/80 focus:border-[#c5a880] text-slate-800 font-medium text-xs rounded-xl p-3.5 focus:outline-none transition-all text-right resize-none leading-relaxed"
                  required
                />

                {/* زر الإرسال الفخم */}
                <button 
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs py-4 rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-[10px] text-[#c5a880]" /> إرسال التعليق للموقع
                </button>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}