
let bit = {
CMS: [
{
title:"Главный модуль",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/main/index.php"
},
{
title:"Сайты",
description:"",
link:"#"
},
{
title:"Управление структурой",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/fileman/index.php"
},
{
title:"Информационные блоки",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/iblock/index.php"
},
{
title:"Highload-блоки",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/hlblock/index.php"
},
{
title:"Поиск",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/search/index.php"
},
{
title:"Перевод",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/translate/index.php"
},
{
title:"Форумы и Блоги",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/forum/index.php"
},
{
title:"Фотогалерея 2.0",
description:"",
link:"#"
},
{
title:"Социальная сеть",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/socialnetwork/index.php"
},
{
title:"Обучение, тестирование",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/learning/index.php"
},
{
title:"Веб-мессенджер",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/im/index.php"
},
{
title:"Бизнес-процессы",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/bizproc/index.php"
},
{
title:"Почта",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/mail/index.php"
},
{
title:"Техподдержка",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/support/index.php"
},
{
title:"Календари",
description:"",
link:"#https://dev.1c-bitrix.ru/api_help/calendar/index.php"
},
{
title:"Документооборот",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/workflow/index.php"
},
{
title:"AD/LDAP интеграция",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/ldap/index.php"
},
{
title:"Универсальные списки",
description:"",
link:"#"
},
{
title:"База знаний Wiki",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/wiki/index.php"
},
{
title:"Сервис «Есть идея!»",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/socialservices/index.php"
},
{
title:"Контроллер сайтов",
description:"",
link:"https://dev.1c-bitrix.ru/api_help/controller/index.php"
},
]
}
document.write("<h3>Модули 1с битрикс</h3>");
let bitrix = bit.CMS.length

for(let i=0; i < bitrix; i++)
document.write("<a href='#'>" + bit.CMS[i].title + "</a>" + "<br/>");



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
