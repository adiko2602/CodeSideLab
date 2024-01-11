import * as z from "zod";

export const configuratorSchema = z.object({
  type: z.enum(["shop", "blog", "hotel"], {
    required_error: "Musisz wybrać typ strony.",
  }),
  ddos: z.boolean().default(false).optional(),
  slider: z.boolean().default(false).optional(),
  subpages: z.coerce.number().default(0).optional(),
  hosting: z.boolean().default(false).optional(),
  moderation: z.boolean().default(false).optional(),
  positioning: z.boolean().default(false).optional(),
});

export type TConfiguratorSchema = z.infer<typeof configuratorSchema>;
