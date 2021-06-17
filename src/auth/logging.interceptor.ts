import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    const req = context.switchToHttp().getRequest();

    console.log('Interceptor Caught', req.headers['x-api-key']);
    if (req.headers['x-api-key'] == '94dcc7a1-0ad3-49b1-a128-13c58a178b72') {
      console.log('Authenticated');

    }
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}