import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Icon } from '@/components/ui/icon';
import { icons } from 'lucide-react';

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: 'MagicWand',
    title: 'Effortless Image Enhancement',
    description:
      'Enhance your images with just a few clicks using AI-powered tools that automatically adjust lighting, colors, and more for professional-quality results.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Consistent Quality Assurance',
    description:
      'Ensure your images meet the highest standards every time with AI-driven quality checks that identify and correct imperfections.',
  },
  {
    icon: 'Lightbulb',
    title: 'Creative Freedom',
    description:
      'Unlock your creative potential with a variety of AI-powered tools that allow you to experiment and innovate with ease, giving your images a unique touch.',
  },
  {
    icon: 'GraphUp',
    title: 'Boost Engagement',
    description:
      'Attract more attention to your visuals by enhancing image quality, leading to higher engagement rates on social media and other platforms.',
  },
];

export const BenefitsSection = () => {
  return (
    <section id='benefits' className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-2 place-items-center lg:gap-24'>
        <div>
          <h2 className='text-lg text-primary mb-2 tracking-wider'>Benefits</h2>

          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Transform Your Photos in Seconds
          </h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Achieve stunning results effortlessly with AI-driven tools that
            simplify photo retouching, making professional-quality enhancements
            accessible to everyone.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 w-full'>
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className='bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number'
            >
              <CardHeader>
                <div className='flex justify-between'>
                  <span className='text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground'>
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
