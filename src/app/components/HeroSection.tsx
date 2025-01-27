'use client'

import Navbar from "../components/Navbar";
import HeroComponent from "./HeroSection_Component"

export default function HeroSection() {
    return(
        <div className="relative overflow-x-hidden">
            <div 
                className="relative min-h-screen bg-cover bg-center" 
                style={{ backgroundImage: `url(/assets/HeroSection_BG.jpg)` }}
            >
                {/* Gradient overlay - responsive */}
                <div className="absolute inset-x-0 bottom-0 h-[50%] md:h-[40%] bg-gradient-to-t from-[#2B1B17] via-[#2B1B17]/80 to-transparent z-10" />    
                
                {/* Navbar with mobile padding */}
                <div className="sticky top-0 z-50">
                    <Navbar />
                </div>
                
                {/* Hero content with vertical spacing */}
                <div className="relative z-20 pt-16 md:pt-24 lg:pt-28">
                    <HeroComponent />
                </div>
            </div>
        </div>
    )
}