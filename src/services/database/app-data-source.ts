import { createConnection } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export async function startDatabase() {
    try {
        await createConnection({
            type: "postgres",
            host: process.env.DATABASE_HOST,
            port: 5432,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD, // Certifique-se de que esta é uma string
            database: process.env.DATABASE_NAME,
            entities: [],
            synchronize: true,
        });
    } catch (error) {
        console.error(error, "Error initializing database");
        throw error;
    }
}
