import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: 'TabletSmartphone',
    title: 'Mobile Friendly',
    description:
      "Optimized for all devices, ensuring a seamless experience whether you're editing on your smartphone, tablet, or desktop.",
  },
  {
    icon: 'BadgeCheck',
    title: 'Community Support',
    description:
      'Join a community of photographers and designers who rely on ImageRestore for consistent, high-quality results.',
  },
  {
    icon: 'Goal',
    title: 'Precision Targeting',
    description:
      'Tailor your image enhancements with pinpoint accuracy, focusing on the areas that matter most to your vision.',
  },
  {
    icon: 'PictureInPicture',
    title: 'Stunning Visuals',
    description:
      'Elevate your visuals with AI-powered tools that enhance colors, contrast, and clarity, making your images stand out.',
  },
  {
    icon: 'MousePointerClick',
    title: 'Intuitive Interface',
    description:
      'Navigate with ease through a user-friendly interface designed to make photo retouching quick and straightforward.',
  },
  {
    icon: 'Newspaper',
    title: 'Clear and Concise',
    description:
      'Enjoy clear guidance and straightforward features, allowing you to achieve your desired results without confusion.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id='features' className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
        Features
      </h2>

      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        What Makes Us Different
      </h2>

      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
        Discover the unique features that set ImageRestore apart and make it the
        go-to choice for photographers and designers.
      </h3>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className='h-full bg-background border-0 shadow-none'>
              <CardHeader className='flex justify-center items-center'>
                <div className='bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4'>
                  {/* <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  /> */}
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground text-center'>
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
