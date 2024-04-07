import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const start = async () => {
    try {
        const PORT = process.env.PORT || 4000;
        const app = await NestFactory.create(AppModule)

        // Enable CORS
        app.enableCors();

        await app.listen(PORT, () => console.log('backend started on PORT ${PORT}'))
    } catch (e) {
        console.log(e)
    }
}

start();
