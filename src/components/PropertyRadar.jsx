import React, { useState } from "react";
import {
  FaRadar,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCheckCircle,
} from "react-icons/fa";

export default function PropertyRadar() {
  const [location, setLocation] = useState("الحى الخامس");
  const [maxPrice, setMaxPrice] = useState("1,500,000");
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!whatsapp || whatsapp.trim().length < 11) {
      alert("برجاء إدخال رقم واتساب صحيح مكون من 11 رقماً يا غالي");
      return;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setWhatsapp("");
    }, 4000);
  };

  return (
    <section
      className="py-16 bg-slate-50 border-t border-b border-slate-100"
      style={{ direction: "rtl" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* الجانب الأيمن */}
          <div className="lg:col-span-5 bg-slate-900 p-8 flex flex-col justify-between text-right text-white">
            <div>
              <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-[#c5a880] mb-6">
                <FaRadar className="text-xl animate-pulse" />
              </div>
              <h3 className="text-xl font-black mb-2">لم تجد ما تبحث عنه؟</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                فعّل رادار التنبيهات الخاص بنا مجاناً، وسنقوم باصطياد العقار
                المناسب لطلبك وإرساله فوراً إلى هاتف الواتساب الخاص بك قبل نشره!
              </p>
            </div>
            <p className="text-[10px] text-slate-500 mt-4">
              نلتزم بخصوصيتك تماماً ولا نرسل رسائل مزعجة.
            </p>
          </div>

          {/* الجانب الأيسر */}
          <div className="lg:col-span-7 p-8 bg-white flex flex-col justify-center">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5 text-right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[#c5a880]" /> 1. المنطقة
                      المستهدفة:
                    </label>
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#c5a880]"
                    >
                      <option value="الحى الخامس">الحى الخامس</option>
                      <option value="الحى السابع">الحى السابع</option>
                      <option value="العبور الجديدة">العبور الجديدة</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 flex items-center gap-1">
                      <FaMoneyBillWave className="text-[#c5a880]" /> 2. ميزانيتك
                      القصوى:
                    </label>
                    <select
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-xs font-bold rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#c5a880]"
                    >
                      <option value="1,000,000">حتى 1,000,000 ج.م</option>
                      <option value="2,000,000">حتى 2,000,000 ج.م</option>
                      <option value="5,000,000">حتى 5,000,000 ج.م</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 flex items-center gap-1">
                    <FaWhatsapp className="text-emerald-500" /> 3. رقم الواتساب
                    للإشعارات:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      placeholder="مثال: 01012345678"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="flex-1 bg-slate-50 border border-slate-200 text-sm font-bold rounded-xl p-3.5 text-slate-800 text-left placeholder:text-right placeholder:text-slate-400 focus:outline-none focus:border-[#c5a880]"
                    />
                    <button
                      type="submit"
                      className="bg-slate-900 hover:bg-[#c5a880] text-white text-xs font-bold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md whitespace-nowrap"
                    >
                      تفعيل الرادار 🚀
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <FaCheckCircle className="text-4xl text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-lg font-black text-slate-900">
                  تم تشغيل الرادار بنجاح!
                </h4>
                <p className="text-slate-500 text-xs max-w-xs mx-auto leading-relaxed">
                  سنرسل العروض المطابقة لـ{" "}
                  <span className="font-bold">{location}</span> فوراً إلى رقمك{" "}
                  <span className="font-bold">{whatsapp}</span>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
