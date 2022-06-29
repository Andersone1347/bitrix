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

      //           попытка в вывод значений standart true false

      let item = document.createElement('div')
      item.className = "and"
      for (let i = 0; i < bitrix; i++) { 
      if(bit.CMS[0].start !== false) 
      item.textContent = `${bit.CMS[i].standart}`
      document.body.prepend(item)
      }


    
/* document.querySelector('body').innerHTML = `<table class="bitr"></table>`
for(key in bit.CMS) {
    let row = document.createElement('tr')
    row.innerHTML = `<td>${bit.CMS[0].start}</td>`
    document.querySelector('.bitr').appendChild(row)

        
}
 */



//     document.body.innerHTML = `
// <ul>
//     <li><a href='${bit.CMS[0].link}'>${bit.CMS[0].title}</a></li>
//     <li><a href='${bit.CMS[1].link}'>${bit.CMS[1].title}</a></li>
//     <li><a href='${bit.CMS[2].link}'>${bit.CMS[2].title}</a></li>
//     <li><a href='${bit.CMS[3].link}'>${bit.CMS[3].title}</a></li>
//     <li><a href='${bit.CMS[4].link}'>${bit.CMS[4].title}</a></li>
//     <li><a href='${bit.CMS[5].link}'>${bit.CMS[5].title}</a></li>
//     <li><a href='${bit.CMS[6].link}'>${bit.CMS[6].title}</a></li>
//     <li><a href='${bit.CMS[7].link}'>${bit.CMS[7].title}</a></li>
//     <li><a href='${bit.CMS[8].link}'>${bit.CMS[8].title}</a></li>
//     <li><a href='${bit.CMS[9].link}'>${bit.CMS[9].title}</a></li>
//     <li><a href='${bit.CMS[10].link}'>${bit.CMS[10].title}</a></li>
//     <li><a href='${bit.CMS[11].link}'>${bit.CMS[11].title}</a></li>
//     <li><a href='${bit.CMS[12].link}'>${bit.CMS[12].title}</a></li>
//     <li><a href='${bit.CMS[13].link}'>${bit.CMS[13].title}</a></li>
//     <li><a href='${bit.CMS[14].link}'>${bit.CMS[14].title}</a></li>
//     <li><a href='${bit.CMS[15].link}'>${bit.CMS[15].title}</a></li>
//     <li><a href='${bit.CMS[16].link}'>${bit.CMS[16].title}</a></li>
//     <li><a href='${bit.CMS[17].link}'>${bit.CMS[17].title}</a></li>
//     <li><a href='${bit.CMS[18].link}'>${bit.CMS[18].title}</a></li>
//     <li><a href='${bit.CMS[19].link}'>${bit.CMS[19].title}</a></li>
//     <li><a href='${bit.CMS[20].link}'>${bit.CMS[20].title}</a></li>
//     <li><a href='${bit.CMS[21].link}'>${bit.CMS[21].title}</a></li>

//     </ul>`
