import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpInputDto, SignUpOutputDto } from '../models/sign-up.dto';
import { Observable } from 'rxjs';
import { SignInInputDto, SignInOutputDto } from '../models/sign-in.dto';
import { RefreshTokenOutputDto } from '../models/refreshtoken.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  private baseUrl = 'http://localhost:8080';

  public signUp(data: SignUpInputDto): Observable<SignUpOutputDto> {
    return this.http.post<SignUpOutputDto>(
      this.baseUrl + '/api/auth/sign-up',
      data
    );
  }

  public signIn(data: SignInInputDto): Observable<SignInOutputDto> {
    return this.http.post<SignInOutputDto>(
      this.baseUrl + '/api/auth/sign-in',
      data
    );
  }

  public refreshToken(refreshtoken: string): Observable<RefreshTokenOutputDto> {
    return this.http.get<RefreshTokenOutputDto>(
      this.baseUrl + '/api/auth/refresh-token',
      {
        headers: {
          refreshtoken,
        },
      }
    );
  }
}
