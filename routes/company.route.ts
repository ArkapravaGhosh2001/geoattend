import express, { Request, Response } from "express";
import { companyController } from "../controllers/company.controller";
import { companySchema } from "../schema/company.schema";
import { validateRequest } from "../validator/validateRequest";
import { employeeSchema } from "../schema/employee.schema";

const router = express.Router();

router.post("/companies", validateRequest(companySchema), async (req: Request, res: Response) => {
  try {
    const company = await companyController.createCompany(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
});

router.get("/companies", async (req: Request, res: Response) => {
  const companies = await companyController.getAllCompanies();
  res.json(companies);
});

router.get("/companies/:id", async (req: Request, res: Response) => {
  const company = await companyController.getCompanyById(req.params.id);
  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ error: "Company not found" });
  }
});

router.put("/companies/:id", async (req: Request, res: Response) => {
  try {
    const company = await companyController.updateCompany(
      req.params.id,
      req.body
    );
    res.json(company);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
});

router.delete("/companies/:id", async (req: Request, res: Response) => {
  await companyController.deleteCompany(req.params.id);
  res.status(204).end();
});

// Employee routes
router.post("/employees", validateRequest(employeeSchema), async (req: Request, res: Response) => {
  try {
    const employee = await companyController.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
});

router.get("/employees", async (req: Request, res: Response) => {
  const employees = await companyController.getAllEmployees();
  res.json(employees);
});

router.get("/employees/:id", async (req: Request, res: Response) => {
  const employee = await companyController.getEmployeeById(req.params.id);
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ error: "Employee not found" });
  }
});

router.put("/employees/:id", validateRequest(employeeSchema), async (req: Request, res: Response) => {
  try {
    const employee = await companyController.updateEmployee(
      req.params.id,
      req.body
    );
    res.json(employee);
  } catch (error) {
    res.status(400).json({ error: String(error) });
  }
});

router.delete("/employees/:id", async (req: Request, res: Response) => {
  await companyController.deleteEmployee(req.params.id);
  res.status(204).end();
});

router.get("/companies/:id/employees", async (req: Request, res: Response) => {
  const employees = await companyController.getEmployeesByCompany(
    req.params.id
  );
  res.json(employees);
});

export default router;