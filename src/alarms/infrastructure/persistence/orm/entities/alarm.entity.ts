/* 
* This class will represent our database table and will be used by typeORM
* to map the data to and from the database
*/

import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('alarms')
export class AlarmEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  severity: string;
}