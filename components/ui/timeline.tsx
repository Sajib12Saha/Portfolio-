"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  des: string;
  color: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  img: string;
}

export const Timeline = ({ title, color, Icon, des, img }: TimelineEntry) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto ">
        <div className="flex justify-start pt-10  md:gap-5">
          {/* Left Section (Icon + Title) */}
          <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
              <div className={`relative flex-shrink-0  rounded-full p-6 w-16 h-16`} style={{ backgroundImage: `linear-gradient(to right, transparent, ${color})`,}}>
                <Icon className="w-6 h-6 " />
                <div className="absolute -top-1 -right-1 bg-white rounded-full p-1">
                  <Check className="w-3 h-3 text-primary" />
                </div>
              
              </div>
            </div>
            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500">
              {title}
            </h3>
          </div>

          {/* Right Section (Description + Image) */}
          <div className="relative flex flex-col  items-start gap-6 pl-20 pr-4 md:pl-4 w-full">
            <motion.div className="flex-1"
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay:0.4}}
            >
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                {title}
              </h3>
              <p className="text-neutral-400">{des}</p>
            </motion.div>

            {/* Image Container */}
            {img ? (
       <motion.div className="max-w-[300px] w-full"
       initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay:0.4}}
       >
       <Image
      src={img}
      alt={title}
      width={300}
      height={200}
      layout="intrinsic"
      className="rounded-lg shadow-lg overflow-hidden"
        />
      </motion.div>
      ) : null}
          </div>
        </div>

        {/* Scroll Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-700 to-transparent"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
