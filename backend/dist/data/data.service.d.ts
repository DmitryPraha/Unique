import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
export declare class DataService {
    create(createDatumDto: CreateDatumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDatumDto: UpdateDatumDto): string;
    remove(id: number): string;
}
