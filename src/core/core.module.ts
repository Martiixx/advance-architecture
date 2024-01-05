import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapOptions } from '../common/interfaces/application-bootstrap-options.interface';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: process.env.DB_HOST,
              port: parseInt(process.env.DB_PORT) || 5432,
              password: process.env.DB_PASSWORD,
              username: process.env.DB_USERNAME,
              autoLoadEntities: true,
              synchronize: true,
            }),
          ]
        : [];

    return {
      module: CoreModule,
      imports,
    };
  }
}