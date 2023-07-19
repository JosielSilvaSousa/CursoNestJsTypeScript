import {Column,Entity,CreateDateColumn,UpdateDateColumn,PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: 'state'})
export class StateEntity{  
    @PrimaryGeneratedColumn('rowid')
    id:number;
    
    @Column({name:'name',nullable:false})
    name: string;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt : Date;

 }