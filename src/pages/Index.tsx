import { useEffect, useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import ErrorSection from "@/components/sections/ErrorSection";
import MechanismSection from "@/components/sections/MechanismSection";
import SolutionSection from "@/components/sections/SolutionSection";
import OfferSection from "@/components/sections/OfferSection";
import ExpertSection from "@/components/sections/ExpertSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import UrgencySection from "@/components/sections/UrgencySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import PostScriptSection from "@/components/sections/PostScriptSection";
import FooterSection from "@/components/sections/FooterSection";
import { trackMetaEvent } from "@/lib/meta-pixel";

const Index = () => {
  const offerRef = useRef<HTMLDivElement>(null);
  const viewContentFired = useRef(false);

  useEffect(() => {
    // PageView via CAPI on mount
    trackMetaEvent("PageView");
  }, []);

  useEffect(() => {
    // ViewContent when user scrolls to the offer section
    if (!offerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !viewContentFired.current) {
          viewContentFired.current = true;
          trackMetaEvent("ViewContent", {
            content_name: "Operação 3em10",
            content_category: "Sales Page",
            currency: "BRL",
            value: 47.0,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(offerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroSection />
      <PainSection />
      <ErrorSection />
      <MechanismSection />
      <TestimonialsSection />
      <SolutionSection />
      <div ref={offerRef}>
        <OfferSection />
      </div>
      <ExpertSection />
      <GuaranteeSection />
      <FAQSection />
      <UrgencySection />
      <FinalCTASection />
      <PostScriptSection />
      <FooterSection />
    </main>
  );
};

export default Index;
