import {Column,Entity,CreateDateColumn,UpdateDateColumn,PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: 'address'})
export class AddressEntity{  
    @PrimaryGeneratedColumn('rowid')
    id:number;
    
    @Column({name:'name',nullable:false})
    name: string;
    
    @Column({name:'user_id',nullable:false})
    user_id: number;

    @Column({name:'complement',nullable:false})
    complement: string;

    @Column({name:'number',nullable:false})
    number: number;

    @Column({name:'cep',nullable:false})
    cep: string;

    @Column({name:'city_id',nullable:false})
    city_id: number;

    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt : Date;

    
}