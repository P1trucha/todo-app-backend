import { Entity, Column, CreateDateColumn, PrimaryColumn } from 'typeorm';


@Entity()
export class TodoList {
    @PrimaryColumn("uuid")
    id: string;

    @Column({ length: 50 })
    title: string;

    @Column({length:500})
    description:string;

    @CreateDateColumn()
    createdAt:Date;

    @Column({nullable:true})
    isCompleted:boolean;

 
    
}