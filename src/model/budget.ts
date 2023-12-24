import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base_entity';
import { Category } from './category';

@Entity('budgets')
export class Budget extends BaseEntity {

  @Column({ name: 'amount', type: 'float', precision: 10, scale: 2})
  amount: number;

  @Column({ name: 'start_date', type: 'date' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'date' })
  endDate: Date;

  @ManyToOne(() => Category, (category) => category.budgets)
  category: Category;
}