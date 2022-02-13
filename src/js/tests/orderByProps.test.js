import orderByProps from '../orderByProps';

test('Реализация функции, которая для переданного объекта возвращает массив его свойств со значениями, отсортированный по свойствам', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const arr = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(orderByProps(obj, arr)).toEqual(expected);
});
