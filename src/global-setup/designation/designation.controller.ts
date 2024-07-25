import { Controller, HttpStatus } from "@nestjs/common";
import { DesignationService } from "./designation.service";

@Controller("designation")
export class DesignationController {
  constructor(public readonly designationService: DesignationService) {}
  async getAll() {
    try {
      const results = await this.designationService.getAll();

      return {
        success: true,
        status: HttpStatus.OK,
        data: results,
      };
    } catch (error) {
      throw error;
    }
  }
}
