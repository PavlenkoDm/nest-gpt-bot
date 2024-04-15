import { ConfigService } from '@nestjs/config';
import { ChatgptService } from 'src/chatgpt/chatgpt.service';
import { Scenes, Telegraf } from 'telegraf';
type Context = Scenes.SceneContext;
export declare class TelegramService extends Telegraf<Context> {
    private readonly configService;
    private readonly gpt;
    constructor(configService: ConfigService, gpt: ChatgptService);
    onStart(ctx: Context): void;
    onMessage(message: string): import("rxjs").Observable<string>;
}
export {};
