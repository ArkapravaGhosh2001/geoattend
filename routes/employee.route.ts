import express, { Request, Response } from "express";
import { employeeController } from "../controllers/employee.controller";
import { employeeSchema } from "../schema/employee.schema";
import { validateRequest } from "../validator/validateRequest";

const router = express.Router();

router.post(
  "/",
  validateRequest(employeeSchema),
  async (req: Request, res: Response) => {
    try {
      const employee = await employeeController.createEmployee(req.body);
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json({ error: "Failed to create employee" });
    }
  }
);

router.get("/", async (req: Request, res: Response) => {
  try {
    const employees = await employeeController.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve employees" });
  }
});

router.get("employee/:id", async (req: Request, res: Response) => {
  try {
    const employee = await employeeController.getEmployeeById(req.params.id);
    if (employee) {
      res.json(employee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve employee" });
  }
});

router.put(
  "/:id",
  validateRequest(employeeSchema.partial()),
  async (req: Request, res: Response) => {
    try {
      const employee = await employeeController.updateEmployee(
        req.params.id,
        req.body
      );
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: "Failed to update employee" });
    }
  }
);

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    await employeeController.deleteEmployee(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete employee" });
  }
});

router.get("/company/:companyId", async (req: Request, res: Response) => {
  try {
    const employees = await employeeController.getEmployeesByCompany(
      req.params.companyId
    );
    res.json(employees);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to retrieve employees for the company" });
  }
});

export default router;
