import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required").optional(),
  foundedYear: z.number().int().min(1800, "Founded year must be 1800 or later").max(new Date().getFullYear(), "Founded year cannot be in the future").optional(),
  address: z.string().min(1, "Address is required").optional(),
  city: z.string().min(1, "City is required").optional(),
  longitude: z.number().min(-180).max(180, "Longitude must be between -180 and 180"),
  latitude: z.number().min(-90).max(90, "Latitude must be between -90 and 90"),
});

export type CompanySchema = z.infer<typeof companySchema>;