import { IsEmpty, IsNotEmpty, Length } from 'class-validator';

export class CreateBlogDto {
  @IsNotEmpty({ message: 'the blog title cannot be empty' })
  @Length(3, 255)
  title: string;
  @IsNotEmpty({ message: 'the blog body cannot be empty' })
  @Length(5)
  body: string;
}
