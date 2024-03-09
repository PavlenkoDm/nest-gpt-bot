import { ConfigService } from '@nestjs/config';
import { TelegrafModuleAsyncOptions, TelegrafModuleOptions } from 'nestjs-telegraf';

const telegrafModuOptions = (config: ConfigService): TelegrafModuleOptions => {
  return {
    token: config.get<string>('TELEGRAM_API')!,
  };
};

export const options = (): TelegrafModuleAsyncOptions => {
  return {
    inject: [ConfigService],
    useFactory: (config: ConfigService) => telegrafModuOptions(config),
  };
};
