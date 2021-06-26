import { IsNotEmpty, Length } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(['email'])
export class User {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({type: 'int'})
    @Length(3, 100)
    public name!: string;

    @Column({type: 'varchar', nullable: false})
    @IsNotEmpty()
    public email!: string;

    @Column({type: 'varchar', nullable: false})
    @IsNotEmpty()
    public password!: string;

    @Column({type: 'tinyint', nullable: false, default: 0, comment: '1: admin, 2: normal'})
    @IsNotEmpty()
    public role!: number;

    @Column()
    @CreateDateColumn()
    public createdAt!: Date;

    @Column()
    @UpdateDateColumn()
    public updatedAt!: Date;
}
