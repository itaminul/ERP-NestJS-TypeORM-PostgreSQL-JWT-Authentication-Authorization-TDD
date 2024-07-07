import { Test, TestingModule } from '@nestjs/testing';
import { EmployeTypeController } from './employe-type.controller';

describe('EmployeTypeController', () => {
  let controller: EmployeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeTypeController],
    }).compile();

    controller = module.get<EmployeTypeController>(EmployeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
