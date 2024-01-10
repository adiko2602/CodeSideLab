"use client";

import * as z from "zod";

export const adminCreateUserSchema = z.object({
  email: z
    .string({ required_error: "Adres email jest wymagany." })
    .email({ message: "Nieprawidłowy adres email." }),
  password: z
    .string({ required_error: "Hasło jest wymagane" })
    .min(8, { message: "Hasło musi zawierać minumum 8 znaków" }),
});

export type TAdminCreateUserSchema = z.infer<typeof adminCreateUserSchema>;
