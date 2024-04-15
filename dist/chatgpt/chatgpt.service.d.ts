import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
export declare class ChatgptService {
    private readonly configService;
    private readonly httpService;
    private readonly logger;
    private gptUrl;
    private apiKey;
    constructor(configService: ConfigService, httpService: HttpService);
    generateResponse(content: string): Observable<string>;
}
