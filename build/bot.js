"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("6069145648:AAEx2eSIHDY_za9zXM1TqlsavQjpcubzGH4"); // <-- 把你的 bot token 放在 "" 之间
// 你现在可以在你的 bot 对象 `bot` 上注册监听器。
// 当用户向你的 bot 发送消息时，grammY 将调用已注册的监听器。
// 处理 /start 命令。
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// 处理其他的消息。
bot.on("message", (ctx) => ctx.reply("Got another message!"));
// 现在，你已经确定了将如何处理信息，可以开始运行你的 bot。
// 这将连接到 Telegram 服务器并等待消息。
// 启动 bot。
bot.start();
