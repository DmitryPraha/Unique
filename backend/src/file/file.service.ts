import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'
import {HttpException, HttpStatus, Injectable} from "@nestjs/common";

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'file'
}

@Injectable()
export class FileService{

    createFile(type: FileType, file): string {
        try {
            const fileExtension = file.originalname
            const fileName = uuid.v4() + '.' + fileExtension
            const filePath = path.resolve('./src/static/files/', type)
            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return type + '/' + fileName
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(fileName: string) {

    }

}
