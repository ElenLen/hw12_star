# hw12_star

Необходимо создать сервис комментариев. В нём будет три поля ввода:

1. поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. Например, было введено пользователем : иВаН . Стало: Иван .

2. поле для ввода ссылки на аватар;

3. поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию checkSpam(str), заменяющую 'viagra' или 'XXX' на \*\*\* ;

Функция должна быть нечувствительна к регистру:
const comment1 = checkSpam('buy ViAgRA now'); //результат buy **_ now
const comment2 = checkSpam('free xxx'); //результат free _**
const comment3 = checkSpam("innocent rabbit") ; //результат innocent rabbit
