import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class WalletAddress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(() => User, { cascade: true })
    user: User;
}
