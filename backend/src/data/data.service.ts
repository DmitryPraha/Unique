import { Injectable } from '@nestjs/common';
import { CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import * as fs from "fs";

@Injectable()
export class DataService {
  create(createDatumDto: CreateDatumDto) {
    return 'This action adds a new datum';
  }

  findAll() {
    const dirPath = './static/files/';

    const entities = [];


    const files = fs.readdirSync(dirPath).map(fileName => `${fileName}`);
    entities.push(files);
    console.log(files.join('\n'));
    return entities;
  }

  findOne(id: number) {
    return `This action returns a #${id} datum`;
  }

  update(id: number, updateDatumDto: UpdateDatumDto) {
    return `This action updates a #${id} datum`;
  }

  remove(id: number) {
    return `This action removes a #${id} datum`;
  }
}
