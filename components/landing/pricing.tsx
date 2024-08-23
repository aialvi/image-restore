import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Check } from 'lucide-react';

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: 'Free',
    popular: 0,
    price: 0,
    description:
      'Get started with essential features to explore the basics of AI-powered image retouching.',
    buttonText: 'Start Free Trial',
    benefitList: [
      '1 team member',
      '1 GB storage',
      'Up to 2 projects',
      'Community support',
      'Basic AI assistance',
    ],
  },
  {
    title: 'Premium',
    popular: 1,
    price: 45,
    description:
      'Unlock advanced tools and greater flexibility with more storage and priority support.',
    buttonText: 'Get Started',
    benefitList: [
      'Up to 4 team members',
      '8 GB storage',
      'Up to 6 projects',
      'Priority support',
      'Enhanced AI assistance',
    ],
  },
  {
    title: 'Enterprise',
    popular: 0,
    price: 120,
    description:
      'Comprehensive solutions for large teams with extensive storage and dedicated support.',
    buttonText: 'Contact Us',
    benefitList: [
      'Up to 10 team members',
      '20 GB storage',
      'Up to 10 projects',
      'Phone & email support',
      'Advanced AI assistance',
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
        Pricing
      </h2>

      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Get unlimited access
      </h2>

      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14'>
        Choose the plan that fits your needs and gain full access to all our
        advanced image retouching tools and features.
      </h3>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4'>
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? 'drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]'
                  : ''
              }
            >
              <CardHeader>
                <CardTitle className='pb-2'>{title}</CardTitle>

                <CardDescription className='pb-4'>
                  {description}
                </CardDescription>

                <div>
                  <span className='text-3xl font-bold'>${price}</span>
                  <span className='text-muted-foreground'> /month</span>
                </div>
              </CardHeader>

              <CardContent className='flex'>
                <div className='space-y-4'>
                  {benefitList.map((benefit) => (
                    <span key={benefit} className='flex'>
                      <Check className='text-primary mr-2' />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? 'default' : 'secondary'
                  }
                  className='w-full'
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
