import {Module} from "@nestjs/common";
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Track} from "./entities/track.entity";
import {DataSource} from "typeorm";
import {FileService} from "../file/file.service";
import {MulterModule} from "@nestjs/platform-express";
import {Domain} from "../domain/entities/domain.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        Track, Domain
    ]),
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService],


})

export class TrackModule{

}
