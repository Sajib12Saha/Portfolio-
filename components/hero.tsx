"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Star } from "lucide-react"
import { NAV_LINKS, SPONSER_LOGO } from "@/constant"
import { Vortex } from "./ui/vortex"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { useState } from "react"

export const Hero = () => {

  const [open, setOpen] = useState(false)
  const router = useRouter()

  const navRoute= (href:string) => {

    router.push(href)
    setOpen(false)

  }

  return (
    <section className="relative overflow-hidden" id="#home">
      <Vortex className="flex items-center flex-col  justify-center px-2 md:px-10 w-full">

        <div className="flex items-center w-full justify-between md:hidden mt-10 px-4 fixed top-0 left-0 right-0 z-50 ">

        <Link href="/">
      <Image src="/icon.png" alt="Logo" width={40} height={40} className="overflow-hidden"/>
    </Link>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex flex-col gap-y-4 py-12">
          <SheetTitle className="sr-only">Navigation</SheetTitle> 
          {NAV_LINKS.map((nav, index) => (
            <Button
              onClick={() => navRoute(nav.href)}
              className="w-full text-sm font-semibold"
              variant="ghost"
              key={index}
            >
              {nav.label}
            </Button>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>

   

        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-12 py-6 mt-20 md:mt-4 ">
          {/* Left Section */}
          <div className="space-y-6">
            <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/10"
            initial={{opacity:0, x: -100}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:1, delay:0.2, ease:"easeIn"}}
            >
              <span className="text-white">Hello!</span>
              <div className="animate-wave">👋</div>
            </motion.div>

            <motion.h1 className="text-2xl md:text-3xl lg:text-4xl font-bold "
            initial={{opacity:0, x: -100}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration:1, delay:0.4, ease:"easeIn"}}
            >
              I'm <span className="text-primary mb-4">Sajib Chandra Saha</span>
              <br />
              Next Js developer 
            </motion.h1>

            <motion.p className="text-white/70 max-w-md tracking-wider leading-9"
            initial={{opacity:0, x: -100}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1, delay:0.6, ease:"easeIn"}}
            >
  Expertise in <span className="font-bold text-primary">React</span>, <span className="font-bold text-primary">Node.js</span>, and <span className="font-bold text-primary">full-stack development</span>. I specialize in building <span className="font-bold text-primary">fast</span>, <span className="font-bold text-primary">scalable</span>, and <span className="font-bold text-primary">user-friendly</span> web applications with a focus on <span className="font-bold text-primary">performance</span>, <span className="font-bold text-primary">SEO</span>, and seamless <span className="font-bold text-primary">user experience</span>. With a strong foundation in <span className="font-bold text-primary">modern web technologies</span>, I ensure that every project is <span className="font-bold text-primary">efficient</span>, <span className="font-bold text-primary">maintainable</span>, and <span className="font-bold text-primary">future-proof</span>. Let's bring your ideas to life with <span className="font-bold text-primary">cutting-edge solutions</span>!  
</motion.p>


            <div className="flex gap-4">
              <Button className="rounded-full px-6" onClick={()=> router.push('/#portfolio')}>Portfolio</Button>
              <Button variant="outline" className="rounded-full px-6" onClick={()=> router.push('/#contact')}>Hire Me</Button>
            </div>
          </div>

          {/* Right Section */}
          <motion.div className="relative hidden md:block"
           initial={{opacity:0, y: -100}}
           whileInView={{opacity:1, y: 0}}
           transition={{duration:1, delay:0.4, ease:"easeIn"}}
          >
            <Image
              src="/sajib.svg"
              alt="Professional portrait"
              width={500}
              height={500}
              className="relative z-10 w-full h-auto overflow-hidden"
            />
            <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold">+ Years</div>
                <div className="text-xs text-white/70">Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ✅ Infinite Looping Animated Sponsor Logos */}
        <div className="container mx-auto py-4 border-t overflow-hidden">
          <motion.div
            className="flex gap-8 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 70, ease: "linear" }}
          >
            {[...SPONSER_LOGO, ...SPONSER_LOGO].map(({ img, name }, index) => (
              <div key={index} className="relative w-24 h-16 md:w-36 md:h-24 lg:w-48 lg:h-32">
                <Image
                  src={img}
                  alt={name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg overflow-hidden"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </Vortex>
    </section>
  )
}
