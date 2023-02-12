import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/entities/blog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Blog],
      synchronize: true,
    }),
    UsersModule,
    BlogModule,
  ],
})
export class AppModule {}
