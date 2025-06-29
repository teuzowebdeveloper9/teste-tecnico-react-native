import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  someMethod() {
    const secretKey = this.configService.get<string>('SECRET_KEY_CLERK');
  }
}
