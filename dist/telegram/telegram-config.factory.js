"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const config_1 = require("@nestjs/config");
const telegrafModuOptions = (config) => {
    return {
        token: config.get('TELEGRAM_API'),
    };
};
const options = () => {
    return {
        inject: [config_1.ConfigService],
        useFactory: (config) => telegrafModuOptions(config),
    };
};
exports.options = options;
//# sourceMappingURL=telegram-config.factory.js.map