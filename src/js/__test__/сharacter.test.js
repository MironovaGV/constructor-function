import Character from '../сharacter';

test('getting id/name/icon/description properties', () => {
  const person = new Character('1234567890', 'Zombie');
  expect(person).toEqual({
    name: '1234567890',
    type: 'Zombie',
    health: 100,
    level: 1,
    attackDefense: '40/1',
  });
});

test('Вводимые данные некорректны, в имени должно быть от 2 до 10 символов', () => {
  expect(() => new Character('1', 'Bowman')).toThrow(Error);
});

test('Вводимые данные некорректны, в имени должно быть от 2 до 10 символов', () => {
  expect(() => new Character('12345678901', 'Bowman')).toThrow(Error);
});

test('Вводимые данные некорректны name', () => {
  expect(() => new Character(1, 'Bowman')).toThrow(Error);
});

test('Вводимые данные некорректны type', () => {
  expect(() => new Character('name', 123)).toThrow(Error);
});

test('Вводимые данные некорректны, тип не соответствует заданным', () => {
  expect(() => new Character('name', 'Paladin')).toThrow(Error);
});
