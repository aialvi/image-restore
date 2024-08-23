import { BenefitsSection } from '@/components/landing/benefits';
import { FAQSection } from '@/components/landing/faq';
import { FeaturesSection } from '@/components/landing/features';
import { FooterSection } from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero';
import NavBar from '@/components/landing/navbar';
import { PricingSection } from '@/components/landing/pricing';
import { ServicesSection } from '@/components/landing/services';
import { TestimonialSection } from '@/components/landing/testimonial';

const Home = async ({ searchParams }: SearchParamProps) => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
};

export default Home;
