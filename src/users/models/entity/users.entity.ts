import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Gender {
    MALE = 0,
    FEMALE = 1,
    OTHER = 2
}

@Entity()
export class tbUsers {
    @PrimaryGeneratedColumn()
    id: number

    @Column({select: false})
    fullname: number

    @Column({select: false})
    token: string
    
    @Column({select: false, unique: true})
    email: string

    @Column({select: false, unique: true})
    phone: string

    @Column({select: false})
    dob: string

    @Column({select: false})
    gender: Gender

    @Column({select: false})
    occupation: string

    @Column({nullable: false})
    guardianName: string

    @Column({nullable: false})
    martialStatus: string

    @Column({nullable: false})
    addressLineOne: string

    @CreateDateColumn()
    createdAt: Date
}