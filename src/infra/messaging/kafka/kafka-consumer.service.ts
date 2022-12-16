import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['renewed-grackle-7215-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmVuZXdlZC1ncmFja2xlLTcyMTUkflts9MF8_KG5hXgXr83NEg1OSS2sQmUgGIc',
          password:
            'cpVgbNQCCStm-zWM_9c6jlHp61m4fP4IYvSnpa9KxfTX0hytNNk7mT0ipwbpX99FA-RfQA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
