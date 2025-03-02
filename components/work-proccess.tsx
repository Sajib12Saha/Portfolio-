'use client'
import { STEPS } from "@/constant"
import { Timeline } from "./ui/timeline"
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision"
import { motion } from "framer-motion"


export const WorkProcess = () => {

  return (
    <section className="py-10 border-t">
       <BackgroundBeamsWithCollision>


      <div className="container mx-auto">


        <div className="text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl font-bold  mb-4"
             initial={{ opacity: 0, x: -100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 1, ease: "easeOut", delay:0.4}}
          >
            Our Work <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p className="text-white/70 max-w-2xl mx-auto"
             initial={{ opacity: 0, x: 10 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 1, ease: "easeOut", delay:0.6}}
          >
          We follow a structured approach, ensuring efficiency, creativity, and seamless execution to deliver outstanding results.
          </motion.p>
        </div>

   
        <div className="space-y-12 max-w-4xl mx-auto">
          {STEPS.map((step, index) => (
          
            <Timeline title={step.title} Icon={step.icon} color={step.color} key={index} des={step.description} img={step.img}/>
          
          ))}
        </div>



      </div>
      </BackgroundBeamsWithCollision>
    </section>
  
  )
}

