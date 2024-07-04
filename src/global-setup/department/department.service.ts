import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Department } from "src/entities/department.entity";
import { Repository } from "typeorm";
import { DepartmentCreateDTO } from "./dto/department.create.dto";
import { DepartmentUpdateDTO } from "./dto/department.update.dto";

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>
  ) {}
  async getAll() {
    return await this.departmentRepository.find({
      order: {
        id: "desc",
      },
    });
  }

  async create(createDepartmentDto: DepartmentCreateDTO): Promise<Department> {
    try {
      const { salary, serialNo, departmentDescription, departmentName, orgId } =
        createDepartmentDto;
      const departmentData = new Department();
      departmentData.departmentName = departmentName;
      departmentData.departmentDescription = departmentDescription;
      departmentData.salary = salary;
      departmentData.serialNo = serialNo;
      departmentData.orgId = orgId;
      const newDepartment =
        this.departmentRepository.create(createDepartmentDto);
      return await this.departmentRepository.save(newDepartment);
    } catch (error) {
      throw new Error("Failed to save departments");
    }
  }

  async update(id: number, updateDepartmentDto: DepartmentUpdateDTO) {
    try {
      const {
        salary,
        serialNo,
        departmentDescription,
        departmentName,
        orgId,
        activeStatus,
      } = updateDepartmentDto;
      const department = new Department();
      department.departmentName = departmentName;
      department.departmentDescription = departmentDescription;
      department.salary = salary;
      department.serialNo = serialNo;
      department.orgId = orgId;
      department.activeStatus = activeStatus;
      return await this.departmentRepository.update(id, department);
    } catch (error) {
      throw new Error("Failed to save departments");
    }
  }
}
