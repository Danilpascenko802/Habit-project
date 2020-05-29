// функция добавления новой привычки в массив привычек
export const addHabit = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr) {
      localStorage.setItem("habits", JSON.stringify(arr));
      resolve("success");
    } else {
      reject(new Error("error"));
    }
  });
};

// функция удаления привычки
export const deleteHabit = (id) => {
  return new Promise((resolve, reject) => {
    if (typeof id === "number") {
      let arr = JSON.parse(localStorage.getItem("habits"));

      const newArr = arr.filter((el) => el.id !== id);
      localStorage.setItem("habits", JSON.stringify(newArr));
      resolve("success");
    } else {
      reject(new Error("Error"));
    }
  });
};

// функция загрузки привычек
export const loadHabits = () => {
  return new Promise((resolve, reject) => {
    let arr = localStorage.getItem("habits");
    if (arr !== undefined) {
      resolve(JSON.parse(arr));
    } else {
      reject(new Error("error"));
    }
  });
};
