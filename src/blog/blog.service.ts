import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}
  @UsePipes(ValidationPipe)
  create(createBlogDto: CreateBlogDto) {
    const newBlog = this.blogsRepository.create(createBlogDto);
    return this.blogsRepository.save(newBlog);
  }

  findAll(): Promise<Blog[]> {
    return this.blogsRepository.find();
  }

  findOne(id: number): Promise<Blog> {
    return this.blogsRepository.findOneBy({ id });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto) {
    // find blog with id
    const blog = await this.findOne(id);
    //update the blog
    return this.blogsRepository.save({ ...blog, ...updateBlogDto });
  }

  remove(id: number) {
    return this.blogsRepository.delete(id);
  }
}
