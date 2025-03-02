'use client'
import { SKILLS } from "@/constant";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { motion } from "framer-motion";

export const Skill = () => {
    return (
        <section className="py-10 border-t" id="skills">
        <div className="container mx-auto">
          <motion.h2 className="text-3xl font-bold text-center mb-12"
             initial={{ opacity: 0, x: -100 }} 
             whileInView={{ opacity: 1, x: 0 }} 
             transition={{ duration: 1, ease: "easeOut", delay:0.4}}
          >
            My Work <span className="text-primary">Skills</span>
          </motion.h2>
          <div className="">

          <Tabs defaultValue="language" className="w-full">
      <TabsList className="w-full flex gap-y-2 flex-wrap items-center justify-around rounded-md shadow-md  ">
        <TabsTrigger value="language">Language</TabsTrigger>
        <TabsTrigger value="framework"> Framework</TabsTrigger>
        <TabsTrigger value="libarary"> libarary</TabsTrigger>
        <TabsTrigger value="ai">AI</TabsTrigger>
        <TabsTrigger value="database">Database</TabsTrigger>
        <TabsTrigger value="tools">Tools</TabsTrigger>
      </TabsList>

      {Object.entries(SKILLS).map(([category, skills]) => (
        <TabsContent key={category} value={category} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
           <motion.div
           initial={{ opacity: 0, x: -100 }} 
           whileInView={{ opacity: 1, x: 0 }} 
           transition={{ duration: 1, ease: "easeOut", delay:0.4}}
           key={index}
           >
              <Card  className="p-4 flex flex-col items-center shadow-lg bg-gradient-to-tr from-primary/20 to-transparent">
                <CardHeader className="flex flex-col items-center">
                  <Image src={skill.img} alt={skill.skill} width={50} height={50} className="overflow-hidden"/>
                  <CardTitle className="text-lg font-semibold mt-2">{skill.skill}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{skill.desc}</p>
                </CardContent>
              </Card>
              </motion.div>
             
            ))}
          </div>
        </TabsContent>
      ))}


      </Tabs>
          </div>
        </div>
      </section>
    )
}