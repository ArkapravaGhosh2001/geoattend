import { z } from "zod";

export const employeeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  position: z.string().min(1, "Position is required"),
  department: z.string().min(1, "Department is required"),
  hireDate: z.coerce.date().max(new Date(), "Hire date cannot be in the future"),
  isActive: z.boolean().default(true),
  companyId: z.string().uuid("Invalid company ID"),
});

export type EmployeeSchema = z.infer<typeof employeeSchema>;