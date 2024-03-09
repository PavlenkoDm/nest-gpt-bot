import { Module } from '@nestjs/common';
import { ChatgptModule } from './chatgpt/chatgpt.module';
import { TelegramModule } from './telegram/telegram.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }), ChatgptModule, TelegramModule],
})
export class AppModule {}
