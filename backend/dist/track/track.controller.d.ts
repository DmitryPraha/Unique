import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "typeorm";
import { Track } from "./entities/track.entity";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(dto: CreateTrackDto): Promise<Track>;
    getAll(count: number, offset: number): Promise<Track[][]>;
    search(query: string): Promise<Track[][]>;
    getOne(id: ObjectId): Promise<Track[]>;
    delete(id: ObjectId): Promise<import("typeorm").DeleteResult>;
}
