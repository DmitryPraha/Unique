import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Track} from "./entities/track.entity";
import {DeepPartial, DeleteResult, getRepository, ObjectId, Repository} from "typeorm";
import {CreateTrackDto} from "./dto/create-track.dto";
import {FileService, FileType} from "../file/file.service";
import {Domain} from "../domain/entities/domain.entity";


@Injectable()

export class TrackService{


    constructor(
        @InjectRepository(Track)
        private tracksRepository: Repository<Track[]>,
        @InjectRepository(Track)
        private trackRepository: Repository<Track>,
        @InjectRepository(Domain)
        private domainRepository: Repository<Domain[]>,
        private fileService: FileService
    ) {}

    //Добавление элемента
    async create(data: CreateTrackDto): Promise<Track>
    {
        //const category1 = new Track()
        //category1.domain = "animals"
        //category1.login = "animals"
        //await this.trackRepository.manager.save(category1)

        //const category2 = new Track()
        //category2.domain = "zoo"
        //category2.login = "zoo"
        //await this.trackRepository.manager.save(category2)

        //const question = new Domain()
        //question.domain = "dogs"
        //question.tracks = [category1, category2]
        //return this.domainRepository.manager.save(question)

        const product = new Track();
        product.domain = data.domain;
        product.password = data.password;
        return await this.trackRepository.save(product);
    }


    async getAllOzon(count = 10 , offset = 0): Promise<Track[][]>{
        //Поиск по озону
        const tracks = await this.tracksRepository
            .createQueryBuilder("track")
            .leftJoinAndSelect("track.domains", "domains")
            .where("domains.domain = :domain", { domain: "ozon.ru" })
            //.where("track.domain.domains.domain = :domain")
           .getMany()
//
        //const tracks = await this.tracksRepository.find();
        return tracks;
    }
    async getAllZenit(count = 10 , offset = 0): Promise<Track[][]>{
        //Поиск по озону
        const tracks = await this.tracksRepository
            .createQueryBuilder("track")
            .leftJoinAndSelect("track.domains", "domains")
            .where("domains.domain = :domain", { domain: "zenit.ru" })
            //.where("track.domain.domains.domain = :domain")
            .getMany()
//
        //const tracks = await this.tracksRepository.find();
        return tracks;
    }
    async getAllCSKA(count = 10 , offset = 0): Promise<Track[][]>{
        //Поиск по озону
        const tracks = await this.tracksRepository
            .createQueryBuilder("track")
            .leftJoinAndSelect("track.domains", "domains")
            .where("domains.domain = :domain", { domain: "cska.ru" })
            //.where("track.domain.domains.domain = :domain")
            .getMany()
//
        //const tracks = await this.tracksRepository.find();
        return tracks;
    }

    //Возвращение всех записей
    async getAll(count = 10 , offset = 0): Promise<Track[][]>{
        //Поиск по озону
        const tracks = await this.tracksRepository.find();
        //const tracks = await this.tracksRepository
        //    .createQueryBuilder("track")
        //    .leftJoinAndSelect("track.domains", "domains")
        //    .where("domains.domain = :domain", { domain: "ozon.ru" })
        //    //.where("track.domain.domains.domain = :domain")
         //   .getMany()
//
        //const tracks = await this.tracksRepository.find();
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track[]>{
        return await this.tracksRepository.findOneById(id);
    }


    //Функция рабочая
    async delete(id: ObjectId): Promise<DeleteResult> {
        const track = await this.tracksRepository.findOneById(id);
        return await this.tracksRepository.delete(track);
     }


        async search(domain: string): Promise<Track[][]> {
           const user = this.tracksRepository
               .createQueryBuilder()
               .where("leak.domain = :domain", { domain: domain }).getMany();
           return user;
        }


    async filesFunction(dataFile, count = 0)
    {
        let path = '';
        dataFile.forEach(function(item) {
            path = item.originalname;
            //console.log(item.originalname);
        });
        const fs = require('fs');
        const data = fs.readFileSync('./static/files/'+path, 'utf8');
        //console.log(data);
        //let str = "I love JavaScript";
        //let result = str.match(/Java(Script)/g);
        //alert( result[0] ); // JavaScript
        //alert( result.length ); // 1
        //let str = "https://ozon.ru/";
        //let result = str.match(/ozon.ru/g);
        //console.log(result)

        try {
            //const data = fs.readFileSync(data, 'utf8');
            const lines = data.trim().split('\n');
            const entities = [];
            const arr = [];
            lines.forEach(line => {
                const [domain, login, password] = line.trim().split(' ');
                let result = domain.replace('https://', '');

               /* let ozon = domain
                let zenit = domain
                let cska = domain
                let resultOzon = ozon.match(/ozon.ru/g);
                let resultZenit = zenit.match(/zenit.ru/g);
                let resultCSKA = cska.match(/cska.ru/g);

                if(resultOzon == 'ozon.ru')
                {
                    ozon.push({domain,login,password})
                    //console.log(arr)
                }
                if(resultCSKA == 'cska.ru')
                {
                    cska.push({domain,login,password})
                    //console.log(arr)
                }
                if(resultZenit == 'zenit.ru')
                {
                    zenit.push({domain,login,password})
                    //console.log(arr)
                }

                console.log(resultOzon)
                console.log(resultZenit)
                console.log(resultCSKA)
*/

                //console.log(result)

                //if(result == 'zenit.ru')
                //{
                //    arr.push({domain,login,password})
                //console.log(arr)
                //
                //let str = "https://ozon.ru/";
                //let result = str.match(/ozon.ru/g);
                //entities.push({domain,login,password});
            });

            //tracks.forEach((element) =>
            //console.log(domain)
            // );
            //console.log(arr)
            //console.log(entities.length)
            //const question = new Domain()
            // question.domain = "dogs"
            //question.tracks = arr

            //Object.keys(arr)
            //    .sort(/* Здесь можно наводить любой порядок, какой душе угодно*/)
            //    .forEach(key => console.log(key, arr[key]));


            let dom = [];

            let ozon = [];
            let zenit = [];
            let cska = [];


            for (const line of lines) {
                const [domain, login, password] = line.trim().split(' ');
                //let result = domain.replace('https://', '');

                let ozon = domain
                let zenit = domain
                let cska = domain
                let resultOzon = ozon.match(/ozon.ru/g);
                let resultZenit = zenit.match(/zenit.ru/g);
                let resultCSKA = cska.match(/cska.ru/g);

                if(resultZenit == "zenit.ru")
                {
                    //console.log(result)
                    //console.log(login)
                    let zenit = await this.domainRepository.findOneById(1)
                    //console.log(zenit)
                    //console.log(zenit)
                    //arr.push(zenit)
                    //console.log(zenit)
                    //dom.push(zenit)
                    //let question = new Domain()
                    //question.domain = "dogs"
                    //question.tracks = [category1]
                    let category1 = new Track()
                    category1.domain = domain
                    category1.login = login
                    category1.password = password
                    category1.domains = [zenit]
                    //console.log(category1)
                    await this.trackRepository.manager.save(category1)
                    //console.log(question)
                    //await this.domainRepository.manager.save(question)
                }

                if(resultOzon == "ozon.ru")
                {
                    //console.log(result)
                    //console.log(login)
                    let zenit = await this.domainRepository.findOneById(2)
                    //console.log(zenit)
                    //console.log(zenit)
                    //arr.push(zenit)
                    //console.log(zenit)
                    //dom.push(zenit)
                    //let question = new Domain()
                    //question.domain = "dogs"
                    //question.tracks = [category1]
                    let category1 = new Track()
                    category1.domain = domain
                    category1.login = login
                    category1.password = password
                    category1.domains = [zenit]
                    //console.log(category1)
                    await this.trackRepository.manager.save(category1)
                    //console.log(question)
                    //await this.domainRepository.manager.save(question)
                }

                if(resultCSKA == "cska.ru")
                {
                    //console.log(result)
                    //console.log(login)
                    let zenit = await this.domainRepository.findOneById(3)
                    //console.log(zenit)
                    //console.log(zenit)
                    //arr.push(zenit)
                    //console.log(zenit)
                    //dom.push(zenit)
                    //let question = new Domain()
                    //question.domain = "dogs"
                    //question.tracks = [category1]
                    let category1 = new Track()
                    category1.domain = domain
                    category1.login = login
                    category1.password = password
                    category1.domains = [zenit]
                    //console.log(category1)
                    await this.trackRepository.manager.save(category1)
                    //console.log(question)
                    //await this.domainRepository.manager.save(question)
                }


                /*if(resultOzon == 'ozon.ru')
                {
                    ozon.push({domain,login,password})
                    //console.log(arr)
                }
                if(resultCSKA == 'cska.ru')
                {
                    cska.push({domain,login,password})
                    //console.log(arr)
                }
                if(resultZenit == 'zenit.ru')
                {
                    zenit.push({domain,login,password})
                    //console.log(arr)
                }

                console.log(ozon)
                console.log(zenit)
                console.log(cska)
                */





               /* if(result == "zenit.ru")
                {
                    //console.log(result)
                    //console.log(login)
                    let zenit = await this.domainRepository.findOneById(1)
                    //console.log(zenit)
                    //console.log(zenit)
                    //arr.push(zenit)
                    //console.log(zenit)
                    //dom.push(zenit)
                    //let question = new Domain()
                    //question.domain = "dogs"
                    //question.tracks = [category1]
                    let category1 = new Track()
                    category1.domain = domain
                    category1.login = login
                    category1.password = password
                    category1.domains = [zenit]
                    //console.log(category1)
                    await this.trackRepository.manager.save(category1)
                    //console.log(question)
                    //await this.domainRepository.manager.save(question)
                }*/
            }
            /*for (const line of arr) {
                //console.log(arr[i])
                let category1 = new Track()
                category1.domain = "dog"
                category1.login = "dog"
                await this.trackRepository.manager.save(category1)


                let question = new Domain()
                question.domain = "dogs"
                question.tracks = [category1]
                await this.domainRepository.manager.save(question)
            }*/
           /* for (var i = 0; i < arr.length; i++)
            {
                //console.log(arr[i])
                let category1 = new Track()
                category1.domain = "dog"
                category1.login = "dog"
                await this.trackRepository.manager.save(category1)
                let question = new Domain()
                question.domain = "dogs"
                question.tracks = [category1]
                await this.domainRepository.manager.save(question)
            }*/
            //Надо убирать это, элементы уже должны быть сохранены
            return 'Все данные загружены';
        } catch (err) {
            console.error('Ошибка чтения файла:', err);
            return null;
        }
        const entities = fs.readFileSync('./static/files/'+path, 'utf8');

        if (entities) {
            //console.log(entities);
        } else {
            console.log('Не удалось прочитать данные из файла.');
        }
    }
}
