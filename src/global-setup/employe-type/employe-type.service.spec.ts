import { Test, TestingModule } from '@nestjs/testing';
import { EmployeTypeService } from './employe-type.service';

describe('EmployeTypeService', () => {
  let service: EmployeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeTypeService],
    }).compile();

    service = module.get<EmployeTypeService>(EmployeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
