import { BenefitsSection } from '@/components/landing/benefits';
import { FAQSection } from '@/components/landing/faq';
import { FeaturesSection } from '@/components/landing/features';
import { FooterSection } from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero';
import NavBar from '@/components/landing/navbar';
import { PricingSection } from '@/components/landing/pricing';
import { ServicesSection } from '@/components/landing/services';
import { TestimonialSection } from '@/components/landing/testimonial';
import { Collection } from '@/components/shared/Collection';
import { getAllImages } from '@/lib/actions/image.action';
import Image from 'next/image';
import Link from 'next/link';

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      {/* <section className='sm:mt-12'>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section> */}
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
