import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    UploadedFiles,
    UseInterceptors
} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./dto/create-track.dto";
import {ObjectId} from "typeorm";
import {Track} from "./entities/track.entity";
import {AnyFilesInterceptor} from "@nestjs/platform-express";



@Controller('/tracks')
export class TrackController{

    constructor(private trackService: TrackService) {}

    @Post()
      async create(@Body() dto: CreateTrackDto): Promise<Track>{
        return await this.trackService.create(dto)
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


    @Post('/file')
    fileFunction(@UploadedFiles() file){
        const text = file;
        return this.trackService.filesFunction(text);
    }

    @Get(':id')
     getOne(@Param('id') id: ObjectId){
        return this.trackService.getOne(id);
    }

    @Delete(':id')
     delete(@Param('id') id: ObjectId){
        return this.trackService.delete(id);
    }

    @Post('upload')
    @UseInterceptors(AnyFilesInterceptor())
    uploadFile(@UploadedFiles() files) {
        console.log(files);
        return this.trackService.filesFunction(files);
        //console.log(files);
    }

    //@Post('upload')
    //@UseInterceptors(AnyFilesInterceptor())
    //uploadFile(@UploadedFiles() files) {
    //    return this.trackService.filesFunction(files);
    //    //console.log(files);
    //}

}
