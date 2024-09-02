import prisma from "../libs/prisma";

export const employeeController = {
  async createEmployee(data: any) {
    return prisma.employee.create({ data });
  },

  async getAllEmployees() {
    return prisma.employee.findMany();
  },

  async getEmployeeById(id: string) {
    return prisma.employee.findUnique({
      where: { id },
    });
  },

  async updateEmployee(id: string, data: any) {
    return prisma.employee.update({
      where: { id },
      data,
    });
  },

  async deleteEmployee(id: string) {
    return prisma.employee.delete({
      where: { id },
    });
  },

  async getEmployeesByCompany(companyId: string) {
    return prisma.employee.findMany({
      where: { companyId },
    });
  },
};