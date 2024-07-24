import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "src/entities/employee.entity";
import { Repository } from "typeorm";
import { CreateEmployeeDTO } from "./dto/create.employee.dto";
import { UpdateEmployeeDTO } from "./dto/update.employee.dto";
import { Department } from "src/entities/department.entity";
import { EmployeeType } from "src/entities/employeeType.entity";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    public readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(EmployeeType)
    private readonly employeeType: Repository<EmployeeType>
  ) {}
  async getAll() {
    // return await this.employeeRepository.find({
    //   relations: {
    //     department: true,
    //     designation: true,
    //     empType: true,

    //   },
    //   order: {
    //     id: 'DESC'
    //   }
    // });
    const data = await this.employeeRepository
      .createQueryBuilder("employee")
      .leftJoinAndSelect("employee.department", "departmentName")
      .leftJoinAndSelect("employee.designation", "designationName")
      .leftJoinAndSelect("employee.empType", "empTypeName")
      .leftJoinAndSelect("employee.division", "divisionName")
      .orderBy("employee.id", "DESC")
      .getMany();
    return data;
  }

  async getAllActive() {
    return await this.employeeRepository
      .createQueryBuilder("employee")
      .where("employee.activeStatus =: activeStatus", { activeStatus: 1 })
      .orderBy("employee.id", "DESC")
      .getMany();
  }

  async getAllInactive() {
    return await this.employeeRepository
      .createQueryBuilder("employee")
      .where("employee.activeStatus =: activeStatus", { activeStatus: 0 })
      .orderBy("employee.id", "DESC")
      .getMany();
  }
  async create(createEmployeeDto: CreateEmployeeDTO) {
    try {
      if (createEmployeeDto.departmentId) {
        const department = await this.departmentRepository.findOne({
          where: { id: createEmployeeDto.departmentId },
        });
        if (!department) {
          throw new HttpException(
            {
              statusCode: HttpStatus.BAD_REQUEST,
              message: "Data not found",
              error: "Bad Request",
            },
            HttpStatus.BAD_REQUEST
          );
        }
      }

      const employeeData = this.employeeRepository.create(createEmployeeDto);
      return await this.employeeRepository.save(employeeData);
    } catch (error) {
      throw new Error("Failed to save Data");
    }
  }
  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDTO
  ): Promise<Employee> {
    try {
      // Check if employee exists
      const employee = await this.employeeRepository.findOne({
        where: {
          id: id,
        },
      });

      if (!employee) {
        throw new HttpException(
          {
            statusCode: HttpStatus.NOT_FOUND,
            message: "Data not found",
            error: "Not Found",
          },
          HttpStatus.NOT_FOUND
        );
      }

      if (updateEmployeeDto.departmentId) {
        const department = await this.departmentRepository.findOne({
          where: { id: updateEmployeeDto.departmentId },
        });

        if (!department) {
          throw new HttpException(
            {
              statusCode: HttpStatus.NOT_FOUND,
              message: "Data not found",
              error: "Not Found",
            },
            HttpStatus.NOT_FOUND
          );
        }
      }
      // Update employee fields
      Object.assign(employee, updateEmployeeDto);

      // Save updated employee
      return await this.employeeRepository.save(employee);
    } catch (error) {
      throw error;
    }
  }

  async deleteEmployeeById(id: number) {
    try {
      const result = await this.employeeRepository.delete(id);
      if (result.affected === 0) {
        throw new HttpException("Data not found", HttpStatus.NOT_FOUND);
      }
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        "Failed to delete Data",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
