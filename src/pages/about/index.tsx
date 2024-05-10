// pages/about.tsx
import React from 'react';
import aboutImg from "/public/slide-2.jpg"
import { Hero } from '@/components';

const AboutPage: React.FC = () => {
  return (
    <>
      <Hero
        title="About Us"
        image={aboutImg}
        description="LSTR (Lestari) adalah organsasi non-profit yang berfokus dalam pemeliharan lingkungan dan kesejahteraan masyarakat. LSTR dapat menjadi sarana informasi bagi orang banyak yang ingin terlibat dalam berbagai macam kegiatan yang membutuhkan perhatian khusus dan memberikan impact yang baik dimasa depan."
        backgroundColor="bg-white"
        descriptionColor='text-black'
      />
    </>

  )
};

export default AboutPage;
