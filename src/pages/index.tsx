import React from "react";
import { Hero, Activity } from "@/components";
import homeImg from "/public/slide-1.jpg";

const Home = () => {
  const activity = [
    {
      id: "1",
      title: "Keberlangsungan Sumber Daya",
      description:
        "Memperluas akses terhadap air bersih dan fasilitas sanitasi yang memadai di seluruh dunia, khususnya di komunitas kurang berkembang. Investasi infrastruktur dan teknologi vital untuk menjamin sumber air yang bersih dan aman, serta sanitasi yang memadai bagi semua.",
    },
    {
      id: "2",
      title: "Managemen Persampahan",
      description:
        "Implementasi strategi zero waste untuk mengurangi, menggunakan kembali, dan mendaur ulang sampah dengan tujuan menghilangkan pembuangan ke TPA. Program ini mendukung inovasi dalam pengelolaan sampah dan edukasi masyarakat untuk mengubah perilaku konsumsi.",
    },
    {
      id: "3",
      title: "Kesejahteraan Masyarakat",
      description:
        "Mendorong pembangunan komunitas yang mandiri dan ramah lingkungan, berfokus pada integrasi prinsip-prinsip ekonomi, sosial, dan ekologi. Tujuannya adalah menciptakan infrastruktur yang mendukung penggunaan energi terbarukan dan mobilitas berkelanjutan, sambil memastikan kesetaraan sosial dan akses yang adil.",
    },
  ];
  return (
    <>
      <Hero
        title="Hijaukan Bumi, Hidupkan Harapan!"
        image={homeImg}
        description="Gabung bersama kami membangun masa depan yang lebih hijau dan penuh harapan. Aksi Anda hari ini menentukan bumi esok hari. Mari beraksi untuk alam dan kemanusiaan!"
        backgroundColor={""}
        descriptionColor={""}
      />
      <Activity activities={activity} />
    </>
  );
};

export default Home;
