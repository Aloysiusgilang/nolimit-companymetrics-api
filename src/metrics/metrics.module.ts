import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { MetricsController } from './metrics.controller';
import { MetricsService } from './metrics.service';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  ],
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}
