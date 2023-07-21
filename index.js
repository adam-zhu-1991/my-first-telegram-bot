import { Bot } from 'grammy'

const bot = new Bot("6069145648:AAEx2eSIHDY_za9zXM1TqlsavQjpcubzGH4") // <-- Set your token in the vercel environment variable

bot.api.setWebhook("https://my-first-telegram-bot.vercel.app/api/bot")