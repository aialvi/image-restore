import { BenefitsSection } from '@/components/landing/benefits';
import { FAQSection } from '@/components/landing/faq';
import { FeaturesSection } from '@/components/landing/features';
import { FooterSection } from '@/components/landing/footer';
import { HeroSection } from '@/components/landing/hero';
import NavBar from '@/components/landing/navbar';
import { PricingSection } from '@/components/landing/pricing';
import { ServicesSection } from '@/components/landing/services';
import { TestimonialSection } from '@/components/landing/testimonial';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { getAllImages } from '@/lib/actions/image.action';
import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '@/components/shared/Collection';
import { navLinks } from '@/constants';

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });
  return (
    <>
      <SignedIn>
        <section className='home'>
          <h1 className='home-heading'>
            Make Your Images Better with ImageRestore
          </h1>
          <ul className='flex-center w-full gap-20'>
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className='flex-center flex-col gap-2'
              >
                <li className='flex-center w-fit rounded-full bg-white p-4'>
                  <Image src={link.icon} alt='image' width={24} height={24} />
                </li>
                <p className='p-14-medium text-center text-white'>
                  {link.label}
                </p>
              </Link>
            ))}
          </ul>
        </section>

        <section className='sm:mt-12'>
          <Collection
            hasSearch={true}
            images={images?.data}
            totalPages={images?.totalPage}
            page={page}
          />
        </section>
      </SignedIn>
      <SignedOut>
        <NavBar />
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <ServicesSection />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <FooterSection />
      </SignedOut>
    </>
  );
};

export default Home;
