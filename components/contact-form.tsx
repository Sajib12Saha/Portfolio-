"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Loader2, Send, Star, XIcon } from "lucide-react";
import { FaFilePdf } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "@/schema/zod-validate";
import { ContactInfo } from "./contact-info";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";
import { motion } from "framer-motion";





export const ContactForm = () => {
  const [pending, setPending] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter()

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      subject: "",
      file: undefined, // Ensure file is optional
    },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      setPending(true);
  
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("name", data.name);
      formData.append("subject", data.subject as string);
      formData.append("message", data.message);
  
      // Append the file if it exists
      if (data.file instanceof File) {
        formData.append("file", data.file);
      }
  
      // Send request using Axios
      const response = await axios.post("/api/sendMail", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      toast.success(response.data.message);
      form.reset(); // Reset form fields
      setImageUrl(null); // Reset file preview
      router.refresh();
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error(error.response?.data?.message || "Submission error");
    } finally {
      setPending(false);
    }
  };
  
  return (
    <section className="border-t py-20 " id="contact">
      <div className="container mx-auto relative z-0">
        <div className="grid md:grid-cols-2 relative z-10 gap-12 p-4 items-start">
          <ContactInfo />

          {/* Contact Form Column */}
          <motion.div className="space-y-8 "
           initial={{opacity:0, x: 10}}
           whileInView={{opacity:1, x: 0}}
           transition={{duration:1, delay:0.2, ease:"easeIn"}}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Let's make your brand brilliant!</h2>

            <Form {...form}>
              <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">Your Name <Star className="size-2 fill-red-800 stroke-red-800"/></FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          className="shadow-inner shadow-slate-800 h-14 placeholder:text-white/50 bg-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Subject Field */}
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">Subject <Star className="size-2 fill-red-800 stroke-red-800"/></FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter subject"
                          className="shadow-inner shadow-slate-800 h-14 placeholder:text-white/50 bg-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">Email Address <Star className="size-2 fill-red-800 stroke-red-800"/></FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="shadow-inner shadow-slate-800 h-14 placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">Message <Star className="size-2 fill-red-800 stroke-red-800"/></FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your message..."
                          className="shadow-inner shadow-slate-800 min-h-[200px] placeholder:text-white/50"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* File Upload Field (Optional) */}
                <FormField
  control={form.control}
  name="file"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Attachment</FormLabel>
      <FormControl>
        <div className="flex items-center gap-4">
          {/* Upload Button / Preview */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center justify-center border border-dashed border-primary rounded-lg hover:bg-secondary/70 transition px-4 py-2"
          >
            {imageUrl ? (
              <div className="w-40 h-40 flex flex-col items-center justify-center">
                <div className="relative w-fit">
                  <Image
                    src={imageUrl}
                    alt="Uploaded File"
                    width={100}
                    height={100}
                    className="rounded-lg overflow-hidden"
                  />
                  {/* Remove File Button */}
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2"
                    onClick={() => {
                      URL.revokeObjectURL(imageUrl); // Free memory
                      setImageUrl(null);
                      field.onChange(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : pdfUrl ? (
              <div className="w-40 h-40 flex flex-col items-center justify-center">
                <div className="relative w-fit">
                  <FaFilePdf className="w-16 h-16 text-red-800" />
                  {/* Remove File Button */}
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute -top-2 -right-2"
                    onClick={() => {
                      URL.revokeObjectURL(pdfUrl); // Free memory
                      setPdfUrl(null);
                      field.onChange(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = "";
                      }
                    }}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <span className="text-white/50">No file chosen.</span>
            )}
          </label>

          {/* Hidden File Input */}
          <input
            id="file-upload"
            type="file"
            className="hidden"
            ref={fileInputRef}
            accept=".png,.jpg,.jpeg,.pdf"
            onChange={(e) => {
              const file = e.target.files?.[0];

              if (file) {
                const validTypes = ["application/pdf", "image/png", "image/jpeg"];
                if (!validTypes.includes(file.type)) {
                  form.setError("file", {
                    type: "manual",
                    message: "Only PDF, PNG, and JPG files are allowed.",
                  });
                  return;
                }

                if (file.size >= 5 * 1024 * 1024) {
                  form.setError("file", {
                    type: "manual",
                    message: "File size maximum is 5MB.",
                  });
                  return;
                }

                // Set file preview
                field.onChange(file);
                form.clearErrors("file");

                if (file.type === "application/pdf") {
                  setPdfUrl(URL.createObjectURL(file));
                  setImageUrl(null);
                } else {
                  setImageUrl(URL.createObjectURL(file));
                  setPdfUrl(null);
                }
              }
            }}
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>



                {/* Submit Button */}
                <Button className="rounded-xl w-full px-8">
                  {pending ? <p className="flex items-center gap-x-2">Sending... <Loader2 className="animate-spin size-4"/></p> : <p className="flex items-center gap-x-2">Send <Send/></p>}
                </Button>
              </form>
            </Form>
          </motion.div>


        </div>
        <Image 
    src={'/location-background.jpg'}
    alt="location"
    fill
    className="object-cover inset-0 w-full z-0 opacity-10 rounded-xl"
    />

      </div>
 

    

    </section>
  );
};
