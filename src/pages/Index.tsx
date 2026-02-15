import { useEffect, useRef, lazy, Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import { trackMetaEvent } from "@/lib/meta-pixel";

const ErrorSection = lazy(() => import("@/components/sections/ErrorSection"));
const MechanismSection = lazy(() => import("@/components/sections/MechanismSection"));
const SolutionSection = lazy(() => import("@/components/sections/SolutionSection"));
const OfferSection = lazy(() => import("@/components/sections/OfferSection"));
const ExpertSection = lazy(() => import("@/components/sections/ExpertSection"));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection"));
const FAQSection = lazy(() => import("@/components/sections/FAQSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const UrgencySection = lazy(() => import("@/components/sections/UrgencySection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const PostScriptSection = lazy(() => import("@/components/sections/PostScriptSection"));
const FooterSection = lazy(() => import("@/components/sections/FooterSection"));

const Index = () => {
  const offerRef = useRef<HTMLDivElement>(null);
  const viewContentFired = useRef(false);

  const pageViewFired = useRef(false);

  useEffect(() => {
    if (pageViewFired.current) return;
    pageViewFired.current = true;
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
      <Suspense fallback={null}>
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
      </Suspense>
    </main>
  );
};

export default Index;
