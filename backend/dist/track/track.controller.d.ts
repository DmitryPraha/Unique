import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "typeorm";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(dto: CreateTrackDto): Promise<import("src/track/entities/track.entity").Track[]>;
    getAll(count: number, offset: number): Promise<import("src/track/entities/track.entity").Track[][]>;
    search(query: string): Promise<import("src/track/entities/track.entity").Track[][]>;
    getOne(id: ObjectId): Promise<import("src/track/entities/track.entity").Track[]>;
    delete(id: ObjectId): Promise<import("typeorm").DeleteResult>;
}
