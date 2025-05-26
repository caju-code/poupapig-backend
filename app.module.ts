
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5432:5432,
      username: 'postgres',
      password: 'pass',
      database: 'postgres',
      entities: [],
      synchronize: true, //Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
    }),
  ],
})
export class AppModule {}
