import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class MetricsService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async getEmployeeCount() {
    const result = await this.elasticsearchService.count({
      index: 'companydatabase',
    });
    return result.body.count;
  }

  async getAverageSalary() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          avg_salary: {
            avg: { field: 'Salary' },
          },
        },
      },
    });

    return result.body.aggregations.avg_salary.value;
  }

  async getMinMaxSalary() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          min_salary: { min: { field: 'Salary' } },
          max_salary: { max: { field: 'Salary' } },
        },
      },
    });
    return {
      minSalary: result.body.aggregations.min_salary.value,
      maxSalary: result.body.aggregations.max_salary.value,
    };
  }

  async getAgeDistribution() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          age_distribution: {
            histogram: {
              field: 'Age',
              interval: 5,
            },
          },
        },
      },
    });

    return result.body.aggregations?.age_distribution.buckets;
  }

  async getGenderDistribution() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          gender_distribution: {
            terms: { field: 'Gender' },
          },
        },
      },
    });

    // Debugging logs to inspect the response
    console.log(JSON.stringify(result, null, 2));

    // Return buckets if available
    return result.body.aggregations.gender_distribution?.buckets || [];
  }

  async getMaritalStatusDistribution() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          marital_status_distribution: {
            terms: { field: 'MaritalStatus' },
          },
        },
      },
    });

    return result.body.aggregations.marital_status_distribution.buckets;
  }

  async getDateOfJoiningHistogram() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          date_joining_distribution: {
            date_histogram: {
              field: 'DateOfJoining',
              interval: 'year',
            },
          },
        },
      },
    });
    return result.body.aggregations.date_joining_distribution.buckets;
  }

  async getTopInterests() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          top_interests: {
            terms: { field: 'Interests', size: 10 },
          },
        },
      },
    });
    return result.body.aggregations.top_interests.buckets;
  }

  async getDesignationDistribution() {
    const result = await this.elasticsearchService.search({
      index: 'companydatabase',
      body: {
        aggs: {
          designation_distribution: {
            terms: { field: 'Designation' },
          },
        },
      },
    });
    return result.body.aggregations.designation_distribution.buckets;
  }
}
