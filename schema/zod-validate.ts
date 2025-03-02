import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required").optional(),
  message: z.string().min(1, "Message is required"),
  file: z
    .custom<File | null | undefined>()
    .refine(
      (file) =>
        !file || ["application/pdf", "image/png", "image/jpeg"].includes(file.type),
      {
        message: "Only PDF, PNG, and JPG files are allowed.",
      }
    )
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024, // 5MB size check
      {
        message: "File size miximum 5MB.",
      }
    )
    .nullable(), // Explicitly allow null
});
