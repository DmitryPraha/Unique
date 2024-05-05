import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {DeepPartial, DeleteResult, getRepository, ObjectId, Repository} from "typeorm";
import {Domain} from "./entities/domain.entity";
import {CreateDomainDto} from "./dto/create-domain.dto";

@Injectable()

export class DomainService{

    constructor(
        @InjectRepository(Domain)
        private domainsRepository: Repository<Domain[]>,
        @InjectRepository(Domain)
        private domainRepository: Repository<Domain>,
    ) {}



    //Добавление элемента
    async create(data: CreateDomainDto): Promise<Domain>
    {
        //const domain = new Domain();
        //domain.domain = data.domain;
        const domain = this.domainRepository.create(data);
        return await this.domainRepository.save(domain);
    }

    //Возвращение всех записей
    async getAll(count = 10 , offset = 0): Promise<Domain[][]>{
        const domains = await this.domainsRepository.find();
        return domains;
    }


    async getOne(id: ObjectId): Promise<Domain[]>{
        return await this.domainsRepository.findOneById(id);
    }

    //Функция рабочая
    async delete(id: ObjectId): Promise<DeleteResult> {
        const track = await this.domainsRepository.findOneById(id);
        return await this.domainsRepository.delete(track);
    }
}
