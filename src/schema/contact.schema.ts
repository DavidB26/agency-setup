import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Campo requerido" }), 
  email: z.string().email({message: "Email inválido"}),
  subject: z.string().min(1, { message: "Asunto requerido" }),
  message: z.string().min(1, { message: "Mensaje requerido" }),
  access_key: z.string()
});