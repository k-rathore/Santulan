import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Gender {
    MALE = 0,
    FEMALE = 1,
    OTHER = 2
}

enum MartialStatus {
    MARRIED = 0,
    UNMARRIED = 1
}

@Entity()
export class tbUsers {
    @PrimaryGeneratedColumn()
    id: number

    @Column({select: false})
    fullname: string

    @Column({select: false, nullable: true})
    fcmToken: string
    
    @Column({select: false, unique: true})
    email: string

    @Column({select: false, unique: true})
    phone: string

    @Column({select: false, nullable: true})
    dob: string

    @Column({select: false, nullable: true})
    gender: Gender

    @Column({select: false, nullable: true})
    occupation: string

    @Column({nullable: true})
    guardianName: string

    @Column({nullable: true})
    martialStatus: MartialStatus

    @Column({nullable: true})
    addressLineOne: string

    @Column({nullable: true})
    postalCode: string

    @Column({nullable: true})
    appVersion: string

    @Column({nullable: true})
    mobilePlatform: string

    @CreateDateColumn()
    createdAt: Date
}