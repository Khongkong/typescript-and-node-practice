module.exports = {
    type: "mysql",
    host: process.env.DB_HOST || 'mysql',
    port: parseInt(process.env.DB_PORT || '3306'),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'test',
    entities: ["src/app/models/entities/*.ts"],
    synchronize: true,
    migrations: ["src/migration/*.ts"],
    cli: {
        entitiesDir: "src/app/models/entities",
        migrationsDir: "src/migration"
    }
};
