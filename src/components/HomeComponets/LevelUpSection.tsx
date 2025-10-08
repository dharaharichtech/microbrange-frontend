'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { MoveRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Title from '../layouts/Title'; 

type CardType = {
  id: number;
  image: StaticImageData;
  alt: string;
  title: string;
  link: string;
};

type LevelUpSectionProps = {
  title: string;
  subTitle: string;
  cards: CardType[];
  buttonDescibation: string;
};

const LevelUpSection: React.FC<{ data: LevelUpSectionProps }> = ({ data }) => {
  const router = useRouter();

  const handleCardClick = (card: CardType) => {
    const slug = card.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    router.push(`/level-up/${slug}?title=${encodeURIComponent(card.title)}&id=${card.id}`);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="mx-auto">
        <Title title={data.title} subTitle={data.subTitle} />

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-12">
          {data.cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className="relative bg-white rounded-xl overflow-hidden border border-[#4BBA72] group transform transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#4BBA72]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative z-10 p-4 sm:p-5 group-hover:bg-[#4BBA72]/10 transition-colors duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#4BBA72] flex-1 pr-2">
                    {card.title}
                  </h3>
                  <MoveRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#4BBA72] flex-shrink-0" />
                </div>
              </div>

              <div className="absolute inset-0 bg-[#4BBA72]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4BBA72] text-center sm:text-right">
            {data.buttonDescibation}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LevelUpSection;