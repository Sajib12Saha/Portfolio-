'use client'

import Link from "next/link"
import { Mail, Phone, MapPin} from "lucide-react"
import Image from "next/image"
import { SOCIAL_MEDIA } from "./contact-info"
import { motion } from "framer-motion"

export const  Footer = () => {
  return (
    <footer className="border-t max-w-7xl mx-auto">
      <div className="  py-10 relative w-full">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 gap-y-4 md:gap-12 relative z-20 px-6">
     

          {/* Contact Column */}
          <motion.div
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay:0.4}}
          >
            <h3 className="font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-primary" />
                +(880) 1533513883
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-primary" />
              sahasojib0155@gmail.com
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-primary" />
                Khagrachari, Chittagong, Bangladesh
              </li>
            
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
          initial={{ opacity: 0, x: 10 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut", delay:0.2}}
          >
            <h3 className="font-semibold mb-6">Get the latest information</h3>
            <p className="text-white/70 mb-4">Stay updated with the newest trends, insights, and innovations in the industry.</p>
           
            <div className="flex gap-8 mt-6">
          {SOCIAL_MEDIA.map((social, index)=> (
            <Link className="" href={social.link} key={index}>
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
          </motion.div>


        </div>
        <Image src={'/footer-bg.jpg'}
        alt="footer bg"
        fill
        className=" z-0 object-cover opacity-30 overflow-hidden"/>
      
      </div>
      <div className="border-t border-white/10  pt-6 flex flex-wrap justify-between items-center text-white/70 text-sm px-8 pb-6 leading-6">
          <p>Copyright © 2024 Sajib Chandra Saha. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">
              Terms & Service
            </Link>
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
    </footer>
  )
}

