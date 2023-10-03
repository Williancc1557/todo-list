export interface SignUpDto {
  statusCode: number;
  body: {
    jwt: {
      token: string;
      expiresIn: string;
    };
  };
}

export interface SignUpInputDto {
  name: string;
  email: string;
  password: string;
}
