'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: 'https://github.com/shadcn.png',
    name: 'John Doe',
    userName: 'Product Manager',
    comment:
      "ImageRestore's AI tools have completely transformed our visual content. The ease of use and the quality of the results are unmatched!",
    rating: 5.0,
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Sophia Collins',
    userName: 'Cybersecurity Analyst',
    comment:
      "The generative fill and object removal features are game-changers. I've been able to create flawless images with minimal effort.",
    rating: 4.8,
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Adam Johnson',
    userName: 'Chief Technology Officer',
    comment:
      'Our team has been using ImageRestore for months, and the results have exceeded our expectations. The AI-driven tools save us so much time.',
    rating: 4.9,
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Ethan Parker',
    userName: 'Data Scientist',
    comment:
      'The ability to restore and enhance old images with just a few clicks is incredible. ImageRestore is a must-have tool for any professional.',
    rating: 5.0,
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Ava Mitchell',
    userName: 'IT Project Manager',
    comment:
      'ImageRestore has significantly improved our workflow. The interface is intuitive, and the results are consistently impressive.',
    rating: 5.0,
  },
  {
    image: 'https://github.com/shadcn.png',
    name: 'Isabella Reed',
    userName: 'DevOps Engineer',
    comment:
      "I love how ImageRestore simplifies complex tasks like object recoloring and background removal. It's become an essential part of our toolkit.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id='testimonials' className='container py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          Testimonials
        </h2>

        <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: 'start',
        }}
        className='relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto'
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className='md:basis-1/2 lg:basis-1/3'
            >
              <Card className='bg-muted/50 dark:bg-card'>
                <CardContent className='pt-6 pb-0'>
                  <div className='flex gap-1 pb-6'>
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                    <Star className='size-4 fill-primary text-primary' />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className='flex flex-row items-center gap-4'>
                    <Avatar>
                      <AvatarImage
                        src='https://avatars.githubusercontent.com/u/75042455?v=4'
                        alt='radix'
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className='flex flex-col'>
                      <CardTitle className='text-lg'>{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
