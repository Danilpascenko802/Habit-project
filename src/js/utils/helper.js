export const generateUserId = (users) => {
  // Функция возвращяет минимальный свободный айди
  // Функция принимает массив с уже существующими users

  let result;
  const mass = users.reduce((acc, el) => acc.concat(el.id), []); // Сохраняем в массив существующие ID

  for (let i = 1; i < Infinity; i++) {
    if (!mass.includes(i)) {
      // Проверяем есть ли в массиве айди по возрастанию. Если нет, то возвращяем его
      result = i;
      break;
    }
  }
  console.log(result);
  return result;
};
