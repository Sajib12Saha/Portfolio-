
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { Hire } from "@/components/hire";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";
import { Skill } from "@/components/skill";
import { Testimonials } from "@/components/testimonials";
import { WorkProcess } from "@/components/work-proccess";

export default function Home() {
  return (
     <>
     <Hero/>
     <Services/>
     <Hire/>
     <Skill/>
     <WorkProcess/>
     <Portfolio/>
     <Testimonials/>
     <ContactForm/>
      </>
  );
}
