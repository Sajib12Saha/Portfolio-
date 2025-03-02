'use client'
import { Star } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Reviews } from "@/constant"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

export const Testimonials = () => {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    controls.start({ 
      x: ["0%", "-100%"], 
      transition: { repeat: Infinity, duration: 20, ease: "linear" } 
    });
  }, [controls]);

  const toggleAnimation = () => {
    if (paused) {
      controls.start({ x: ["0%", "-100%"], transition: { repeat: Infinity, duration: 20, ease: "linear" } });
    } else {
      controls.stop();
    }
    setPaused(!paused);
  };

  return (
    <section className="py-20 border-t">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            What My <span className="text-primary">Clients Say</span>
          </motion.h2>
          <motion.p
            className="text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            I deliver high-quality work with attention to detail, ensuring client satisfaction through creativity, efficiency, and reliability.
          </motion.p>
        </div>

        <div className="overflow-hidden rounded-xl py-10 bg-gray-900" onClick={toggleAnimation}>
          <motion.div
            className="flex gap-8 w-max cursor-pointer"
            animate={controls}
          >
            {[...Reviews, ...Reviews].map((review, index) => (
              <motion.div
                key={index}
                className="w-72 md:w-96"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="border-0 p-6 rounded-2xl bg-gray-800 shadow-lg overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.avatar || "/placeholder.svg"}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-white">{review.name}</div>
                      <div className="text-sm text-white/70">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-purple-600 text-purple-700" />
                    ))}
                  </div>
                  <blockquote className="text-white/70 relative pl-6">
                    <span className="absolute left-0 top-0 text-4xl text-primary leading-none">"</span>
                    {review.content}
                  </blockquote>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
