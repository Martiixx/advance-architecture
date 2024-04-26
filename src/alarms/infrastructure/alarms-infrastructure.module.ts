import { Module } from '@nestjs/common';
import { InMemoryAlarmPersistenceModule } from './persistence/in-memory/in-memory-persistence.module.ts';
import { OrmAlarmPersistenceModule } from './persistence/orm/orm-persistence.module';
import { SharedModule } from '../../shared/shared.module.js';

@Module({
  imports: [SharedModule], // 👈
  exports: [SharedModule]  // 👈
})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver === 'orm'
        ? OrmAlarmPersistenceModule
        : InMemoryAlarmPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}