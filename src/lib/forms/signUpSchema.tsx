import * as z from "zod";

export const signUpSchema = z.object({
  email: z
    .string({ required_error: "Adres email jest wymagany." })
    .email({ message: "Nieprawidłowy adres email." }),
  passwords: z
    .object({
      password: z
        .string({ required_error: "Hasło jest wymagane" })
        .min(8, { message: "Hasło musi zawierać minumum 8 znaków" }),
      confirmedPassword: z.string({
        required_error: "Powtórzonie hasła jest wymagane",
      }),
    })
    .superRefine((data, ctx) => {
      if (data.password !== data.confirmedPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Hasła nie są takie same",
          path: ["confirmedPassword"],
        });
      }
    }),
});

export type TSignUpSchema = z.infer<typeof signUpSchema>;
