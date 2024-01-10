import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'user mail' })
    readonly email: string;

    @ApiProperty({ example: '123456', description: 'Password' })
    readonly password: string;
}