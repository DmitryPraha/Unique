import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Domain} from "./entities/domain.entity";
import {DomainController} from "./domain.controller";
import {DomainService} from "./domain.service";
import {Track} from "../leak/entities/track.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        Domain, Track
    ]),
    ],
    controllers: [DomainController],
    providers: [DomainService],



})

export class DomainModule{

}
