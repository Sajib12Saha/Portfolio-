'use client'
import {Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"


export const SOCIAL_MEDIA=[
  {img:"/icons/fiverr-icon.svg", link:"https://www.fiverr.com/users/sajibsaha114",},
  {img:"/icons/github.svg", link:"https://github.com/Sajib12Saha",},
  {img:"/icons/linkedin.svg", link:"https://www.linkedin.com/in/sojib-saha-59457323a",},
  {img:"/icons/facebook.svg", link:"https://www.facebook.com/sojib.saha.942145",},
  {img:"/icons/upwork.svg",link:"https://www.upwork.com/freelancers/~01b704e226a1c55b7a"}
]



export const ContactInfo = () => {
    return (
        <motion.div className="space-y-8 "
        initial={{opacity:0, x: -100}}
        whileInView={{opacity:1, x: 0}}
        transition={{duration:1, delay:0.4, ease:"easeIn"}}
        >
        <h2 className="text-3xl md:text-4xl font-bold ">Contact info</h2>
        <p className="text-white/70 max-w-md">
        Feel free to reach out! Let's collaborate and bring your ideas to life. 🚀📩
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <span className="">+(880) 1533513883</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <span className="">sahasojib0155@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <span className="">Khagrachari, Chittagong, Bangladesh</span>
          </div>

        
        </div>

        <div className="space-y-4">
          <h3 className="text-primary pl-4">Follow Me:</h3>
          <div className="flex gap-8">
          {SOCIAL_MEDIA.map((social, index)=> (
            <Link className="" 
            href={social.link} 
            key={index}
            target="_blank" 
            rel="noopener noreferrer">
              <Image
              src={social.img}
              alt={"My media"}
              width={30}
              height={30}
              className="rounded-full size-8 object-cover overflow-hidden"
              />
            </Link>
          ))}
          </div>
        </div>
      </motion.div>
    )
}