import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('count-employees')
  async getCountEmployees() {
    return this.metricsService.getEmployeeCount();
  }

  @Get('average-salary')
  async getAverageSalary() {
    return this.metricsService.getAverageSalary();
  }

  @Get('min-max-salary')
  async getMinMaxSalary() {
    return this.metricsService.getMinMaxSalary();
  }

  @Get('age-distribution')
  async getAgeDistribution() {
    return this.metricsService.getAgeDistribution();
  }

  @Get('gender-distribution')
  async getGenderDistribution() {
    return this.metricsService.getGenderDistribution();
  }

  @Get('marital-status-distribution')
  async getMaritalStatusDistribution() {
    return this.metricsService.getMaritalStatusDistribution();
  }

  @Get('date-of-joining-histogram')
  async getDateOfJoiningHistogram() {
    return this.metricsService.getDateOfJoiningHistogram();
  }

  @Get('top-interests')
  async getTopInterests() {
    return this.metricsService.getTopInterests();
  }

  @Get('designation-distribution')
  async getDesignationDistribution() {
    return this.metricsService.getDesignationDistribution();
  }
}
