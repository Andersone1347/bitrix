let bit = {
  CMS: [
    {
      title: "Главный модуль",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/main/index.php",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Сайты",
      description: "",
      link: "#",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Управление структурой",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/fileman/index.php",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Информационные блоки",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/iblock/index.php",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Highload-блоки",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/hlblock/index.php",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Поиск",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/search/index.php",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Перевод",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/translate/index.php",
      start:true,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Форумы и Блоги",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/forum/index.php",
      start:false,
      standart:true,
      mb:true,
      b:true,
      ant:true,
    },
    {
      title: "Фотогалерея 2.0",
      description: "",
      link: "#",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Социальная сеть",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/socialnetwork/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Обучение, тестирование",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/learning/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Веб-мессенджер",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/im/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Бизнес-процессы",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/bizproc/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Почта",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/mail/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Техподдержка",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/support/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Календари",
      description: "",
      link: "#https://dev.1c-bitrix.ru/api_help/calendar/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Документооборот",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/workflow/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "AD/LDAP интеграция",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/ldap/index.php",
      start:false,
      standart:false,
      mb:false,
      b:false,
      ant:true,
    },
    {
      title: "Универсальные списки",
      description: "",
      link: "#",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "База знаний Wiki",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/wiki/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Сервис «Есть идея!»",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/socialservices/index.php",
      start:false,
      standart:false,
      mb:false,
      b:true,
      ant:true,
    },
    {
      title: "Контроллер сайтов",
      description: "",
      link: "https://dev.1c-bitrix.ru/api_help/controller/index.php",
      start:false,
      standart:false,
      mb:false,
      b:false,
      ant:true,
    },
  ],
};

       /*    вывод загаловка */
let hMod = document.createElement('h2')
hMod.className = "hMod"
hMod.textContent = `Модули 1с битрикс`
document.body.prepend(hMod)

let bitrix = bit.CMS.length;

for (let i = 0; i < bitrix; i++) 
// {
//   if(bit.CMS.start = true )
//   document.body.innerHTML =
// }

document.write("<a href='" + bit.CMS[i].link + "'>" + bit.CMS[i].title + "</a>" + "<br/>")

let tableModul = document.createElement('table')
tableModul.className = "tableModul"
tableModul.innerHTML = ''

document.body.prepend(tableModul)

/* --------------------вывод таблицы с плюсами */
// for (let key in bit.CMS) {
//   // if(bit.CMS[key] == true)
//   document.write(`
// <table class=table>
// <td>${bit.CMS[key].start}</td>
// <td>${bit.CMS[key].standart}</td>
//  <td>${bit.CMS[key].mb}</td>
//   <td>${bit.CMS[key].b}</td>
//    <td>${bit.CMS[key].ant}</td>
//    </table>`);
// }
      
 

//           попытка в вывод значений standart true false

      // let item = document.createElement('div')
      // item.className = "and"
      // for (let i = 0; i < bitrix; i++) { 
      // if(bit.CMS[0].start !== false) 
      // item.textContent = `${bit.CMS[i].standart}`
      // document.body.prepend(item)
      // }


    
/* document.querySelector('body').innerHTML = `<table class="bitr"></table>`
for(key in bit.CMS) {
    let row = document.createElement('tr')
    row.innerHTML = `<td>${bit.CMS[0].start}</td>`
    document.querySelector('.bitr').appendChild(row)

        
}
 */




