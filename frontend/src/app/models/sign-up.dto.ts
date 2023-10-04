export interface SignUpInputDto {
  name: string;
  email: string;
  password: string;
}

export interface SignUpOutputDto {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}
