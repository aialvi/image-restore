'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className=''>
      <div className='grid place-items-center lg:max-w-screen-xl gap-8  py-20 md:py-32'>
        <div className='text-center space-y-8'>
          <Badge variant='outline' className='text-sm py-2'>
            <span className='mr-2 text-[#121255]'>
              <Badge>Beta</Badge>
            </span>
            <span> is out now! </span>
          </Badge>

          <div className='max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold'>
            <h1>
              Why
              <span className='text-transparent px-2 bg-gradient-to-r from-[#6347d2] to-[#1212d5] bg-clip-text'>
                ImageRestore
              </span>
              ?
            </h1>
          </div>

          <p className='max-w-screen-sm mx-auto text-xl text-muted-foreground'>
            {`ImageRestore allows you to enhance your images with just a few clicks as it uses advanced AI algorithms to improve the quality of your images.`}
          </p>

          <div className='space-y-4 md:space-y-0 md:space-x-4'>
            <Button className='w-5/6 md:w-1/4 font-bold group/arrow'>
              Get Started
              <ArrowRight className='size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform' />
            </Button>

            <Button
              asChild
              variant='secondary'
              className='w-5/6 md:w-1/4 font-bold'
            >
              <Link
                href='https://github.com/aialvi/image-restore.git'
                target='_blank'
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>

        <div className='relative group mt-14'>
          <div className='absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-[#121255]/50 rounded-full blur-3xl'></div>

          <div className='absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg'></div>
        </div>
      </div>
    </section>
  );
};
