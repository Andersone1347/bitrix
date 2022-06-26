let bit = [ 
[
    ["title","Главный модуль"],
    ["description",""],
    ["link","https://dev.1c-bitrix.ru/api_help/main/index.php"]
],
[
    ["title","Сайты"],
    ["description",""],
    ["link","#"]
],
[
  ["title","Управление структурой"],
  ["description",""],
  ["link","https://dev.1c-bitrix.ru/api_help/fileman/index.php"]
],
]
document.body.innerHTML = `
<ul>
  <li><a href='${bit[0][2][1]}'>${bit[0][0][1]}</a></li>
  <li><a href='${bit[1][2][1]}'>${bit[1][0][1]}</a></li>
  <li><a href='${bit[2][2][1]}'>${bit[2][0][1]}</a></li>
</ul>
  `
  console.log(document.querySelector('body').innerHTML)
