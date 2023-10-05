import { UserDto } from 'src/app/models/user.dto';
export interface SignInDto {
  statusCode: number;
  body: {
    jwt: {
      token: string;
      expiresIn: string;
    };
    user: UserDto;
  };
}

export interface SignInInputDto {
  email: string;
  password: string;
}

export interface SignInOutputDto {
  refreshToken: string;
}
