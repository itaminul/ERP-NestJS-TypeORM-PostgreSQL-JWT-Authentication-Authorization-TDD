import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "src/entities/employee.entity";
import { Repository } from "typeorm";
import { CreateEmployeeDTO } from "./dto/create.employee.dto";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    public readonly employeeRepository: Repository<Employee>
  ) {}
  async getAll() {
    return await this.employeeRepository
      .createQueryBuilder("employee")
      .getMany();
  }
  async create(createEmployeeDto: CreateEmployeeDTO) {
    try {
      const {
        firstName,
        lastName,
        middleName,
        mobileOne,
        mobileTwo,
        emergencyMobile,
        fullName,
        empImage,
        empSignature,
        officeEmail,
        personalEmail,
        phone,
        nationalId,
        salary,
      } = createEmployeeDto;
      const employeeData = this.employeeRepository.create(createEmployeeDto);
      await this.employeeRepository.save(employeeData);
    } catch (error) {
      throw new Error("Failed to save employee");
    }
  }
  async update() {
    return "update";
  }
}
