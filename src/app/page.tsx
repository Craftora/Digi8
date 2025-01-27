'use client'

import HeroSection from "./components/HeroSection";
import OurStory from "./components/Our_Story";
import OurOffers from "./components/Our_Offers";
import Footer from "./components/Footer"
import Client_Partners from "./components/Client_Partners";
import Studio from "./components/StudioComponent";
import Testimonials from "./components/Testimonials";
import OurEdge from "./components/Our_Edge"
import ContactUs from "./components/ContactUs"

export default function Home() {
  return (
    <>
        <HeroSection />
        <OurStory />
        <OurOffers />
        <Client_Partners />
        <Studio />
        <Testimonials />
        <OurEdge />
        <ContactUs />
        <Footer />
    </>
  );
}
