import { ApiProperty } from '@nestjs/swagger';


export class SearchRepogithubDto {
    @ApiProperty({
        description: 'ID do repositório',
        example: 273,
        required: false,
    })
    id?: number;

    @ApiProperty({
        description: 'Nome do repositório',
        example: 'challenge',
        required: false,
    })
    name?: string;

    @ApiProperty({
        description: 'Descrição do repositório',
        example: 'api para listar repo ',
        required: false,
    })
    description?: string;

    @ApiProperty({
        description: 'Url do repositório',
        example: 'https://github.com/user/example',
        required: false,
    })
    url?: string;

    @ApiProperty({
        description: 'Linguagem principal',
        example: 'Javascript',
        required: false,
    })
    language?: string;

    @ApiProperty({
        description: 'Data de criação do repositório',
        example: '2024-06-22',
        required: false,
    })
    created_at?: string;
}