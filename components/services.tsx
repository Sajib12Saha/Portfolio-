"use client"

import { Card } from "@/components/ui/card"
import { SERVICES } from "@/constant"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export const Services = () => {
  return (
    <section className="py-20" id="services">
      <motion.div 
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay:0.4 }}

      >
        <motion.h2 className="text-3xl font-bold text-center mb-2"
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay:0.4}}
        >
          My <span className="text-primary">Services</span>
        </motion.h2>
        <motion.p className="text-center text-white/70 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 10 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: "easeOut", delay:0.6}}
        >
          I provide high-quality UI/UX design and full-stack web development services, crafting user-friendly, scalable, and visually appealing digital solutions.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
             
            >
              <Card className="rounded-2xl overflow-hidden group ">
                <motion.div 
                  className="relative aspect-video"
                  whileHover={{ scale: 1.05 }} // Scale-up effect on hover
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute bottom-4 right-4 p-2 bg-primary rounded-full cursor-pointer transition-transform"
                    whileHover={{ rotate: 45 }} // Rotate icon on hover
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
