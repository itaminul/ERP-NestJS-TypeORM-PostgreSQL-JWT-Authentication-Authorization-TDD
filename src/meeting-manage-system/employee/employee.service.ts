import { Injectable } from "@nestjs/common";


@Injectable()
export class EmployeeService {
  async getAll() {
    return "get all";
  }
  async create() {
    return "create";
  }
  async update() {
    return "update";
  }
}
