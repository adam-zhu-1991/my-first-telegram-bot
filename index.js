import { Bot } from 'grammy'

const bot = new Bot("6069145648:AAEx2eSIHDY_za9zXM1TqlsavQjpcubzGH4") // <-- Set your token in the vercel environment variable

bot.api.setWebhook("https://my-first-telegram-b677xvlgy-adam-zhu-1991.vercel.app/api/bot")