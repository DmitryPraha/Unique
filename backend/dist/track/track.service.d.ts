import { Track } from "./entities/track.entity";
import { ObjectId, Repository } from "typeorm";
import { CreateTrackDto } from "./dto/create-track.dto";
export declare class TrackService {
    private tracksRepository;
    constructor(tracksRepository: Repository<Track[]>);
    create(dto: CreateTrackDto): Promise<Track[]>;
    getAll(count?: number, offset?: number): Promise<Track[][]>;
    getOne(id: ObjectId): Promise<Track[]>;
    delete(id: ObjectId): Promise<import("typeorm").DeleteResult>;
    search(query: string): Promise<Track[][]>;
}
