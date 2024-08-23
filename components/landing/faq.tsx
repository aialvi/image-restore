import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'Is it safe for my uploaded files?',
    answer:
      'Yes. It is safe for your uploaded files. Absolutely yes. We understand the concerns about your privacy. These are some steps that we will follow to protect your files.',
    value: 'item-1',
  },
  {
    question: 'How long does it take to process the images?',
    answer:
      'It depends on the size of the image and the number of images you are processing. It usually takes a few seconds to a few minutes.',
    value: 'item-2',
  },
  {
    question: 'What is the maximum file size that I can upload?',
    answer:
      'The maximum file size that you can upload is 4MB. If you have a larger file, you can compress it or resize it before uploading it.',
    value: 'item-3',
  },
  {
    question: 'Can I process multiple images at once?',
    answer:
      'Yes. You can process multiple images at once. You can upload multiple images at once and process them together.',
    value: 'item-4',
  },
  {
    question: 'Can I process images in bulk?',
    answer:
      'Yes. You can process images in bulk. You can upload multiple images at once and process them together.',
    value: 'item-5',
  },
  {
    question: 'Can I process images in different formats?',
    answer:
      'Yes. You can process images in different formats. You can upload images in different formats like JPEG, PNG, and GIF.',
    value: 'item-6',
  },
  {
    question: 'Can I process images in different sizes?',
    answer:
      'Yes. You can process images in different sizes. You can upload images in different sizes and process them together.',
    value: 'item-7',
  },
  {
    question: 'Can I process images in different resolutions?',
    answer:
      'Yes. You can process images in different resolutions. You can upload images in different resolutions and process them together.',
    value: 'item-8',
  },
  {
    question: 'Can I process images in different colors?',
    answer:
      'Yes. You can process images in different colors. You can upload images in different colors and process them together.',
    value: 'item-9',
  },
  {
    question: 'Can I process images in different styles?',
    answer:
      'Yes. You can process images in different styles. You can upload images in different styles and process them together.',
    value: 'item-10',
  },
];

export const FAQSection = () => {
  return (
    <section id='faq' className='container md:w-[700px] py-24 sm:py-32'>
      <div className='text-center mb-8'>
        <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>
          FAQS
        </h2>

        <h2 className='text-3xl md:text-4xl text-center font-bold'>
          Common Questions
        </h2>
      </div>

      <Accordion type='single' collapsible className='AccordionRoot'>
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className='text-left'>
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
