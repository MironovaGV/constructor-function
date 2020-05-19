export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  if (typeof name === 'string' && typeof type === 'string') {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Вводимые данные некорректны, в имени должно быть от 2 до 10 символов');
    }

    const attackDefense = {
      Bowman: '25/25',
      Swordsman: '40/10',
      Magician: '10/40',
      Daemon: '10/40',
      Undead: '25/25',
      Zombie: '40/1',
    };

    if (!Object.prototype.hasOwnProperty.call(attackDefense, type)) {
      throw new Error('Вводимые данные некорректны, тип не соответствует заданным');
    }

    this.attackDefense = attackDefense[type];
  } else {
    throw new Error('Вводимые данные некорректны');
  }
}
