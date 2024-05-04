import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
} from "@nestjs/common";
import {ObjectId} from "typeorm";
import {DomainService} from "./domain.service";
import {Domain} from "./entities/domain.entity";
import {CreateDomainDto} from "./dto/create-domain.dto";



@Controller('/domain')
export class DomainController{

    constructor(private domainService: DomainService) {}


    @Post()
    async create(@Body() dto: CreateDomainDto): Promise<Domain> {
        return await this.domainService.create(dto);
    }

    @Get()
    getAll()
    {
        return this.domainService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId){
        return this.domainService.getOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId){
        return this.domainService.delete(id);
    }
}
