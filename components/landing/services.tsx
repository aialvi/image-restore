import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: 'Image Restore',
    description:
      'Bring old or damaged photos back to life with advanced AI-driven restoration tools that recover details and enhance image quality.',
    pro: 0,
  },
  {
    title: 'Generative Fill',
    description:
      'Effortlessly fill in missing parts of an image with AI-generated content that blends seamlessly with the original photo.',
    pro: 0,
  },
  {
    title: 'Object Recolor',
    description:
      'Change the color of specific objects within your images with precision, giving you creative control over the final look.',
    pro: 1,
  },
  {
    title: 'Background Remove',
    description:
      'Instantly remove backgrounds from your photos, making it easy to isolate subjects and create professional-looking images.',
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id='services' className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
        Services
      </h2>

      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Enhance Your Visuals
      </h2>
      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
        Unlock the full potential of your images with cutting-edge AI tools
        designed to elevate your brand and captivate your audience.
      </h3>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'></div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto'>
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className='bg-muted/60 dark:bg-card h-full relative'
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant='secondary'
              className='absolute -top-2 -right-3 data-[pro=false]:hidden'
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
