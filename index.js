const {
  Client,
  GatewayIntentBits,
  Partials,
  EmbedBuilder,
} = require('discord.js');
// const fs = require('fs');
// const commands = require('./commands.js');
const { token, prefix } = require('./config.json');

const bot = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

bot.once('ready', () => {
  console.log(`Бот ${bot.user.username} запустился!`);
});

bot.on('messageCreate', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const messageArray = message.content.trim().split(/ +/g); // разделение пробелами
  const command = messageArray[0].slice(prefix.length); // команда после префикса
  // const args = messageArray.slice(1); // аргументы после команды

  switch (command) {
    case 'ping': {
      message.channel.send(`Пинг: ${Date.now() - message.createdTimestamp}ms`);
      break;
    }
    case 'hi': {
      message.channel.send(
        '**Данные правила не являются окончательным вариантом, и в любой момент могут редактироваться**'
      );
      break;
    }
    case 'r1': {
      const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle('**Правило — 1.1. Реклама сторонних ресурсов**')
        .addFields(
          {
            name: '> **Описание**',
            value:
              '```Наш сервер является платформой общего доступа для: общения, стриминга и развлечений. Любая коммерческая деятельность, несогласованная с администрацией проекта - запрещена. Независимо от того, какого рода рекламируемый товар и в каком ключе идёт повествование о нем.```',
            inline: false,
          },
          { name: '> **Наказание**', value: '```Бан```', inline: true },
          { name: '> **Длительность**', value: '```Навсегда```', inline: true }
        )
        .setFooter({ text: 'Общие правила' });

      message.channel.send({ embeds: [embed] });
      break;
    }
    default: {
      message.channel.send('Неизвестная команда');
    }
  }
});

bot.login(token);
