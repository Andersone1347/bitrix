let bit = [ [
    ["title","Главный модуль"],
    ["description",""],
    ["link","https://dev.1c-bitrix.ru/api_help/main/index.php"]
],
[
    ["title","Главный модуль"],
    ["description",""],
    ["link","https://dev.1c-bitrix.ru/api_help/main/index.php"]
],
]




document.body.innerHTML = `
<ol>
  <li><a href='https://dev.1c-bitrix.ru/api_help/main/index.php'>${bit[0][0][1]}</a></li>
  <li><a href='https://dev.1c-bitrix.ru/api_help/main/index.php'>${bit[1][0][1]}</a></li>
  
</ol>
  `

  console.log(document.querySelector('body').innerHTML)
