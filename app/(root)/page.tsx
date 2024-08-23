import { BenefitsSection } from '@/components/landing/benefits';
import { FAQSection } from '@/components/landing/faq';
import { FeaturesSection } from '@/components/landing/features';
import { FooterSection } from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero';
import NavBar from '@/components/landing/navbar';
import { PricingSection } from '@/components/landing/pricing';
import { ServicesSection } from '@/components/landing/services';
import { TestimonialSection } from '@/components/landing/testimonial';
import { getAllImages } from '@/lib/actions/image.action';

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';
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
