export default function getSpecialAttacks(character) {
  const result = [];
  character.special.forEach((specialAttack) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = specialAttack;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
