import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './blog/entities/blog.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'goer_blog',
      entities: [Blog],
      synchronize: true,
    }),
    UsersModule,
    BlogModule,
  ],
})
export class AppModule {}
