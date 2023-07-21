import { Bot, webhookCallback } from 'grammy'

const botToken = process.env['BOT_TOKEN']
const bot = new Bot(botToken ? botToken : '')

// attach all middleware
bot.on('message', async ctx => {
  await ctx.reply('Hi there!')
})

// The free version of vercel has restrictions on quotas, which we need to enable in the configuration file vercel.json
// webhookCallback will make sure that the correct middleware(listener) function is called
export default webhookCallback(bot, 'http')