import React from "react";
import Header from "./components/Header";
import HeroAndSearch from "./components/HeroAndSearch";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChooseUs from "./components/WhyChooseUs";
import PropertyCompare from "./components/PropertyCompare";
import MarketPulse from "./components/MarketPulse";
import CustomerReviews from "./components/CustomerReviews";

import Footer from "./components/Footer";

import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col bg-slate-50 font-sans pb-16 lg:pb-0"
      style={{ direction: "rtl" }}
    >
      {/* الهيدر */}
      <Header />

      {/* السلايدر وصندوق البحث الرئيسي */}
      <HeroAndSearch />

      {/* قسم العقارات المميزة */}
      <FeaturedProperties />

      {/* لماذا تختارنا */}
      <WhyChooseUs />

      {/* مقارنة العقارات */}
      <PropertyCompare />

      {/* مؤشر نبض سوق العبور */}
      <MarketPulse />

      {/* آراء العملاء */}
      <CustomerReviews />


{/*الفوتر */ }
<Footer />



    </div>



  );
}