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
var ChatgptService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatgptService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const rxjs_1 = require("rxjs");
let ChatgptService = ChatgptService_1 = class ChatgptService {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
        this.logger = new common_1.Logger(ChatgptService_1.name);
        this.gptUrl = this.configService.get('GPT_URL');
        this.apiKey = this.configService.get('GPT_API');
    }
    generateResponse(content) {
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
        };
        const data = {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content }],
            temperature: 1,
        };
        return this.httpService.post(this.gptUrl, data, { headers }).pipe((0, rxjs_1.map)(({ data }) => data.choices[0].message.content.trim()), (0, rxjs_1.catchError)((err) => {
            this.logger.error(err);
            return (0, rxjs_1.of)('Server Error');
        }));
    }
};
exports.ChatgptService = ChatgptService;
exports.ChatgptService = ChatgptService = ChatgptService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], ChatgptService);
//# sourceMappingURL=chatgpt.service.js.map