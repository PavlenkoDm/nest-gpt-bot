"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const config_1 = require("@nestjs/config");
const nestjs_telegraf_1 = require("nestjs-telegraf");
const chatgpt_service_1 = require("../chatgpt/chatgpt.service");
const telegraf_1 = require("telegraf");
let TelegramService = class TelegramService extends telegraf_1.Telegraf {
    constructor(configService, gpt) {
        super(configService.get('TELEGRAM_API'));
        this.configService = configService;
        this.gpt = gpt;
    }
    onStart(ctx) {
        ctx.replyWithHTML(`<b>Hello, ${ctx.from?.username}</b> \nThis is chat bot PGpt \nEnter your promt and receive the answer`);
    }
    onMessage(message) {
        return this.gpt.generateResponse(message);
    }
};
exports.TelegramService = TelegramService;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __param(0, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TelegramService.prototype, "onStart", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Message)('text')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TelegramService.prototype, "onMessage", null);
exports.TelegramService = TelegramService = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        chatgpt_service_1.ChatgptService])
], TelegramService);
//# sourceMappingURL=telegram.service.js.map