import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Track} from "./track/entities/track.entity";
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { DataModule } from './data/data.module';
import * as path from 'path';

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
            database: 'findler',
            entities: [Track],
            synchronize: true,
        }),
        DataModule,
    ]

})
export class AppModule{}
