import { ConfigService } from '@nestjs/config';
import { Ctx, Message, On, Start, Update } from 'nestjs-telegraf';
import { ChatgptService } from 'src/chatgpt/chatgpt.service';
import { Scenes, Telegraf } from 'telegraf';

type Context = Scenes.SceneContext;

@Update()
export class TelegramService extends Telegraf<Context> {
  constructor(
    private readonly configService: ConfigService,
    private readonly gpt: ChatgptService,
  ) {
    super(configService.get('TELEGRAM_API')!);
  }

  @Start() // Старт бота и вывод приветственного сообщения
  onStart(@Ctx() ctx: Context) {
    ctx.replyWithHTML(
      `<b>Hello, ${ctx.from?.username}</b> \nThis is chat bot PGpt \nEnter your promt and receive the answer`,
    );
  }

  @On('text') // Перехват сообщения в телеграм
  onMessage(@Message('text') message: string) {
    return this.gpt.generateResponse(message);
  }
}
