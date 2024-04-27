import {
    Body,
    Controller,
    Delete,
    Get, HttpException, HttpStatus,
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
import {AnyFilesInterceptor, FileInterceptor, MulterModule} from "@nestjs/platform-express";
import { diskStorage } from 'multer'
import { extname } from 'path'

const storage = diskStorage({
    destination: './static/files/',
    filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const extension = extname(file.originalname);
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        cb(null, `${name}${extension}`);
    },
});

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
    @UseInterceptors(AnyFilesInterceptor({storage}))
    uploadFile(@UploadedFiles() files) {
        //console.log(files);
        //return { message: 'File uploaded successfully!', filename: files.filename };
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
