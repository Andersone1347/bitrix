#  Создал репозиторий 
Важно! Запись производиться в нижнем регистре. Не  используются пробелы. Кириллица не допускается.
По желанию добавить  


 # добавление пользователей
  Settings -> Collaborators -> Add people 

# добавил таблицу в index.php 
```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1">
        <caption>Модули</caption>
        <tr>
         <th>Старт</th>
         <th>Стандарт</th>
         <th>Малый Бизнес</th>
         <th>Бизнес</th>
        </tr>
        <tr><td>1</td><td>2</td><td>3</td><td>4</td></tr>
        
       </table>
</body>
</html>
```

# переделаная таблица 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="2px">
        <tr>
          <th>модули</th>
          <th>Старт</th>
           <th>Стандарт</th>
           <th>Малый бизнес</th>
           <th>Бизнес</th>
        </tr>
        <tr>   
          <td>Wiki</td>
          <td></td><td></td><td></td><td>+</td>
        </tr>
        <tr>   
            <td>Бизнес процессы</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>   
            <td>Блоги</td>
            <td></td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>   
            <td>Валюты</td>
            <td></td><td></td><td>+</td><td>+</td>
          </tr>
          <tr>
          <td>Веб-аналитика</td>
          <td></td><td></td><td></td><td>+</td>
        </tr>
        <tr>
            <td>Веб-мессенджер</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>  
          <tr>
            <td>Веб-сервисы</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Веб-формы</td>
            <td></td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Дизайнер бизнес-процессов</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Документооборот</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Интернет-магазин</td>
            <td></td><td></td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Информационные блоки</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Календарь событий</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Конструктор отчетов</td>
            <td></td><td></td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Менеджер идей</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Модуль производительности</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Облако "1С-Битрикс"</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Облачные хранилища</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Обучение</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Опросы,голосования</td>
            <td></td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Перевод</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Подписка,рассылки</td>
            <td></td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Поиск</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Поисковая оптимизация</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Почта</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Проактивная защита</td>
            <td></td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Реклама,баннеры</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Социальная сеть</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Социальные сервисы</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Техподдержка</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Торговый каталог</td>
            <td></td><td></td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Универсальные списки</td>
            <td></td><td></td><td></td><td>+</td>
          </tr>
          <tr>
            <td>Форум</td>
            <td></td><td>+</td><td>+</td><td>+</td>
          </tr>
          <tr>
            <td>Фотогалерея 2.0</td>
            <td>+</td><td>+</td><td>+</td><td>+</td>
          </tr>
        <style>
            td{
                text-align: center;
            }
            </style>
      </table>
</body>
</html>
```