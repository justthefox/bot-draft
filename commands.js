// Команды
function test(robot, mess, args) {
  mess.channel.send('Тест!');
}

// Список комманд
var commands = [
  {
    name: 'test',
    out: test,
    about: 'Тестовая команда',
  },
];

module.exports.commands = commands;
