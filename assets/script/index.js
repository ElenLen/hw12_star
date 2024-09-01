"use strict";

// 1. поля ввода значений
// поле ввода имени
const nameImput = document.getElementById("name");
// поле ввода ссылки на аватар
const avaInput = document.getElementById("avatar");
// поле ввода коммента
const commentImput = document.getElementById("comment");

// 2. кнопка Отправить
const btn = document.getElementById("button");

// блок-родитель, куда добавляются новый блок div с комментами
const taskList = document.getElementById("main__chat-list");

// антиспам
const checkSpam = (str) => {
  return str.replace(/viagra|XXX/gi, "***");
};

// 3. обработка введенных данных
btn.addEventListener("click", function () {
  // проверка на заполнение полей ввода
  if (
    nameImput.value === "" ||
    avaInput.value === "" ||
    commentImput.value === ""
  ) {
    alert("Не все поля заполнены!");
    return;
  }

  // проверка, что введена корректная ссылка
  if (avaInput.value.indexOf("http") === -1) {
    alert("Не корректная ссылка!");
    return;
  }

  // антиспам функцию checkSpam(str), заменяющую 'viagra' или 'XXX' на *** ;
  commentImput.value = checkSpam(commentImput.value);

  // 4. получение значений из полей
  // имя, удаление пробелов, все мал буквы
  let nameChat = nameImput.value.trim().toLowerCase();
  // отсутствие заглавных букв, кроме первой
  nameChat = nameChat[0].toUpperCase() + nameChat.slice(1);
  console.log(`nameChat: ${nameChat}`);

  // аватар
  const avaChat = avaInput.value;
  console.log(`avaChat: ${avaChat}`);

  // комент
  const commentChat = commentImput.value;
  console.log(`commentChat: ${commentChat}`);

  // 5. создаем новый элемент div
  let newDiv = document.createElement("div");
  // присваиваем ему класс
  newDiv.className = "main__chat-lenta";

  //  создаем новый элемент img-Avatar
  const newAva = document.createElement("img");
  // задаем ему параметры
  newAva.className = "chat__avatar";
  newAva.src = avaChat;
  newAva.alt = "avatar";

  //  создаем новый элемент p-Name
  let newName = document.createElement("p");
  newName.className = "chat__name";

  //  создаем новый элемент p-Comment
  const newComment = document.createElement("p");
  newComment.className = "chat__comment";

  // 6. заполняем текст внутри нов элемента
  newName.textContent = nameChat;
  newComment.textContent = commentChat;

  // 7. добавляем созд эл на нужное место на стр
  // добавляем блок main__chat-lenta с введеными данными img+p+p
  newDiv.append(newAva);
  newDiv.append(newName);
  newDiv.append(newComment);
  // добавляем в родителя main__chat-list созданный блок
  taskList.append(newDiv);

  // 8. чистим поля ввода
  nameImput.value = "";
  avaInput.value = "";
  commentImput.value = "";
});
