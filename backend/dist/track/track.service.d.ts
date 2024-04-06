import { Track } from "./entities/track.entity";
import { DeleteResult, ObjectId, Repository } from "typeorm";
import { CreateTrackDto } from "./dto/create-track.dto";
export declare class TrackService {
    private tracksRepository;
    private trackRepository;
    constructor(tracksRepository: Repository<Track[]>, trackRepository: Repository<Track>);
    create(data: CreateTrackDto): Promise<Track>;
    getAll(count?: number, offset?: number): Promise<Track[][]>;
    getOne(id: ObjectId): Promise<Track[]>;
    delete(id: ObjectId): Promise<DeleteResult>;
    search(query: string): Promise<Track[][]>;
}
