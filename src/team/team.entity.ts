import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    nombreCorto!: string;

    @Column()
    escudo!: string;

    @Column()
    ciudad!: string;

    @Column()
    fechaFundacion!: Date;

    @Column()
    activo!: boolean;
}