export default {
  migrations: {
    disableForeignKeys: true,
  },
  schemaGenerator: {
    disableForeignKeys: true,
  },
  seeder: {
    path: './dist/src/database/seeders',
    pathTs: './src/database/seeders'
  },
  entities: ['./dist/src/common/entities'],
  entitiesTs: ['./src/common/entities'],
  type: 'postgresql',
  dbName: 'market-edge',
  schema: 'test',
  user: 'postgres',
  password: 'Jm2mcs12',
  host: '127.0.0.1',
  port: 5432,
  debug: true,
}
