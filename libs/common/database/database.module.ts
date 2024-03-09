import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ebook',
      autoLoadEntities: true,
      synchronize: true,
      logger: 'advanced-console',
    }),
  ],
})
export class DatabaseModule {}
