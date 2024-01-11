import * as z from "zod";
import validator from "validator";

export const summatorSchema = z.object({
  email: z
    .string({ required_error: "Adres email jest wymagany." })
    .email({ message: "Nieprawidłowy adres email." }),
  phone: z
    .string({ required_error: "Numer telefonu jest wymagany." })
    .refine((val) => validator.isMobilePhone(val), {
      message: "Nieprawidłowy numer telefonu.",
    }),
});

export type TSummatorSchema = z.infer<typeof summatorSchema>;
