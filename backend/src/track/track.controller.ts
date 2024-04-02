import {Body, Controller, Delete, Get, Param, Post, Query} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "typeorm";


@Controller('/tracks')
export class TrackController{

    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() dto: CreateTrackDto){
        return this.trackService.create(dto)
    }

    @Get()
    getAll(@Query('count') count: number,
           @Query('offset') offset:number){
        return this.trackService.getAll(count, offset);
    }

    @Get('/search')
    search(@Query('query') query: string){
        return this.trackService.search(query);
    }

    @Get(':id')
     getOne(@Param('id') id: ObjectId){
        return this.trackService.getOne(id);
    }

    @Delete(':id')
     delete(@Param('id') id: ObjectId){
        return this.trackService.delete(id);
    }
}
