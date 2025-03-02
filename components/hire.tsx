'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"


export const Hire = () => {

  const stats = [
    { value: "1+", label: "Years of Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "60+", label: "Happy Customers" },
  ];

  return (
    <section className="container mx-auto py-20 border-t" id="about">
      <div className="grid md:grid-cols-2 gap-x-6 items-center relative z-0 p-4">
        
        <div className="space-y-4 relative z-40">
          <motion.h2 className="text-3xl font-bold"
             initial={{ opacity: 0, x: -100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 1, ease: "easeOut", delay:0.4}}
          >
            Why <span className="text-primary">Hire Me?</span>
          </motion.h2>

          <motion.p className="text-white/70"
             initial={{ opacity: 0, x: -100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 1, ease: "easeOut", delay:0.6}}
          >
          I’m a skilled Next.js and React developer with a strong focus on UI/UX, performance, and scalability. With expertise in full-stack and SaaS development, I build efficient, user-friendly, and high-performing web applications. I prioritize clean code, modern design, and seamless functionality to deliver outstanding digital experiences. Let’s bring your ideas to life! 🚀
          </motion.p>

          <div className="grid grid-cols-3 gap-6 py-8">
    {stats.map((stat, index) => (
      <motion.div key={index} className="text-center p-4 bg-secondary rounded-lg"
      
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1, ease: "easeOut", delay:0.6}}
      >
        <p className="text-2xl font-bold text-primary">{stat.value}</p>
        <p className="text-sm text-white/70">{stat.label}</p>
      </motion.div>
    ))}
  </div>

          <Button onClick={()=> window.open('https://www.fiverr.com/users/sajibsaha114')}>Hire Me</Button>
        </div>

        <motion.div className="relative overflow-hidden z-40 w-full flex flex-col items-center justify-center py-4"

        initial={{ opacity: 0, y: 100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut", delay:0.4}}
        >
      <div className="relative">
        <div className="absolute top-0 right-0 rounded-full h-6 w-6 bg-gradient-to-tr from-primary to-transparent" />
        <div className="absolute bottom-0 left-0 rounded-full h-6 w-6 bg-gradient-to-tl from-primary to-transparent" />

        <Image
  src={"/sajib.png"}
  alt="Profile image"
  width={300}
  height={300}
  className="rounded-full w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] object-cover overflow-hidden"
/>

      </div>
    </motion.div>
       
 <div className="inset-0 absolute bg-gradient-to-tr from-transparent to-purple-800 w-full h-auto opacity-35 rounded-xl z-0"/>

      </div>
    </section>
  )
}

