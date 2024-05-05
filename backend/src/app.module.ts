import {Module} from "@nestjs/common";
import {TrackModule} from "./leak/track.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Track} from "./leak/entities/track.entity";
import {ServeStaticModule} from "@nestjs/serve-static";
import { DataModule } from './data/data.module';
import {Domain} from "./domain/entities/domain.entity";
import {DomainModule} from "./domain/domain.module";

@Module({
    imports: [TrackModule,
        ServeStaticModule.forRoot({
            //rootPath: path.resolve(__dirname, 'static'),
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'f',
            entities: [Track, Domain],
            synchronize: true,
        }),
        DataModule,DomainModule
    ]

})
export class AppModule{}
