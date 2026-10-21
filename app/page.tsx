"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import ProductSpecsModal from "@/components/ProductSpecsModal";
import ProductionProcess from "@/components/ProductionProcess";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContainerEstimator from "@/components/ContainerEstimator";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState("Fresh Raw Red Shallots (Grade A)");
  const [inquiryVolume, setInquiryVolume] = useState("1 x 20ft Reefer Container (~12-14 MT)");
  const [inquiryIncoterm, setInquiryIncoterm] = useState("FOB Tanjung Perak, Surabaya");

  const handleSelectProduct = (productTitle: string) => {
    setInquiryProduct(productTitle);
  };

  const handleApplyEstimate = (data: {
    product: string;
    packaging: string;
    containerType: string;
    estimatedMT: string;
    incoterm: string;
  }) => {
    setInquiryProduct(data.product);
    setInquiryVolume(`${data.estimatedMT} (${data.containerType} FCL / ${data.packaging})`);
    setInquiryIncoterm(`${data.incoterm} Tanjung Perak, Surabaya`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header with Navigation */}
      <Navbar onOpenSpecsModal={() => setSpecsModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenSpecsModal={() => setSpecsModalOpen(true)} />

        {/* 2. Global Export Highlights & Logistics Strip */}
        <TrustBar />

        {/* 3. About Us: Kediri Roots & Entity */}
        <AboutUs />

        {/* 4. Core Products & Derivative Goods */}
        <Products
          onOpenSpecsModal={() => setSpecsModalOpen(true)}
          onSelectProductForInquiry={handleSelectProduct}
        />

        {/* 5. Production & Quality Process Pipeline */}
        <ProductionProcess />

        {/* 6. Why Choose CV Indo Daha Export */}
        <WhyChooseUs />

        {/* 7. Interactive Container Volume Estimator */}
        <ContainerEstimator onApplyEstimateToForm={handleApplyEstimate} />

        {/* 8. Frequently Asked Questions */}
        <FaqSection />

        {/* 9. Contact Desk & B2B Inquiry Form (RFQ) */}
        <ContactSection
          initialProduct={inquiryProduct}
          initialVolume={inquiryVolume}
          initialIncoterm={inquiryIncoterm}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant Communication Widget */}
      <FloatingWhatsApp />

      {/* Technical Specifications Modal */}
      <ProductSpecsModal
        isOpen={specsModalOpen}
        onClose={() => setSpecsModalOpen(false)}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
}
