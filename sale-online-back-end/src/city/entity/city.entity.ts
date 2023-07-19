import {Column,Entity,CreateDateColumn,UpdateDateColumn,PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: 'city'})
export class CityEntity{  
    @PrimaryGeneratedColumn('rowid')
    id:number;
    
    @Column({name:'name',nullable:false})
    name: string;


    @Column({name:'state_id',nullable:false})
    state_id: number;
    
    @CreateDateColumn({name:'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt : Date;
      

}