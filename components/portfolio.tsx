"use client"

import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PROJECT } from "@/constant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export const Portfolio = () => {
  const plugin = useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true }) // Adjust delay as needed
  )

  return (
    <section className="py-20 border-t" id="portfolio">
      <div className="relative z-0">

      <div className="container mx-auto px-4 z-20 relative">



        <div className="text-center mb-12 pt-6">
          <motion.h2 className="text-3xl md:text-4xl font-extrabold  mb-3"
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay:0.4}}
          >
            Look at My <span className="text-primary">Portfolio</span>
          </motion.h2>
          <motion.p className="text-white/70 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, x: 10 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay:0.6}}
          >
            Explore my latest projects showcasing my skills and creativity.
          </motion.p>
 
        </div>
   
        <Carousel
          className="w-full max-w-5xl mx-auto "
          plugins={[plugin.current]}
          onMouseEnter={() => plugin.current.stop()} // Pause on hover
          onMouseLeave={() => plugin.current.play()} // Resume on leave
          opts={{ loop: true }} // Ensures infinite scrolling
        >
          <CarouselContent className="gap-6">
            {PROJECT.map(({ img, title, des, href }, index) => (
              <CarouselItem key={index} className="flex justify-center  relative">
              <Link href={href}
               target="_blank" 
               rel="noopener noreferrer"
                className="w-full rounded-xl  overflow-hidden transition hover:scale-[1.02] ">
                <Card>
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl font-bold">{title}</CardTitle>
                    <CardDescription>{des}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Image
                      src={img}
                      alt={title}
                      width={700}
                      height={400}
                      className="object-cover w-full h-64 rounded-b-xl"
                    />
                  </CardContent>
                </Card>
                </Link>
              
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 md:left-4 rounded-full p-2" />
          <CarouselNext className="absolute right-2 md:right-4  rounded-full p-2" />
        </Carousel>
      
      </div>



      <Image
          src={'/background.jpg'}
          alt=""
          fill
          className="object-cover  h-[600px] md:h-auto inset-0 overflow-hidden w-full  z-0 opacity-30 rounded-xl"
          />

      </div>

      
    </section>
  )
}
