import { PartialType } from '@nestjs/mapped-types';
import { CreateRepogithubDto } from './create-repogithub.dto';

export class UpdateRepogithubDto extends PartialType(CreateRepogithubDto) {}
