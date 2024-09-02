import prisma from "../libs/prisma";

export const companyController = {
  createCompany: async (data: any) => {
    return prisma.company.create({ data });
  },

  getAllCompanies: async () => {
    return prisma.company.findMany();
  },

  getCompanyById: async (id: string) => {
    return prisma.company.findUnique({
      where: { id },
    //   include: { employees: true },
    });
  },

  updateCompany: async (id: string, data: any) => {
    return prisma.company.update({
      where: { id },
      data,
    });
  },

  deleteCompany: async (id: string) => {
    return prisma.company.delete({
      where: { id },
    });
  },

  createEmployee: async (data: any) => {
    return prisma.employee.create({ data });
  },

  getAllEmployees: async () => {
    return prisma.employee.findMany();
  },

  getEmployeeById: async (id: string) => {
    return prisma.employee.findUnique({
      where: { id },
    //   include: { company: true },
    });
  },

  updateEmployee: async (id: string, data: any) => {
    return prisma.employee.update({
      where: { id },
      data,
    });
  },

  deleteEmployee: async (id: string) => {
    return prisma.employee.delete({
      where: { id },
    });
  },

  getEmployeesByCompany: async (companyId: string) => {
    return prisma.employee.findMany({
      where: { companyId },
    });
  },
};