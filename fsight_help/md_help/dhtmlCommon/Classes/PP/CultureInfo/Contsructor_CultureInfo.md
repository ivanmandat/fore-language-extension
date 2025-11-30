# Конструктор CultureInfo

Конструктор CultureInfo
-


# Конструктор CultureInfo


## Синтаксис


CultureInfo(settings);


## Параметры


settings. JSON-объект со значениями
 свойств класса.


## Описание


Конструктор CultureInfo создает
 экземпляр класса CultureInfo.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на
 файл сценария PP.js. Создадим новый объект класса [CultureInfo](CultureInfo.htm),
 определяющий язык и региональные параметры, зададим дату и получим соответствующие
 ей наименования дня недели, месяца, квартала и полугодия:


// Определим новые региональные настройки
var cultureInfo = new PP.CultureInfo();
cultureInfo.CultureName = PP.CultureNames.ru;
cultureInfo.DisplayName = "Русский"; // Понятное, отображаемое имя языка
cultureInfo.IsSundayFirst = true; // Воскресенье является первым днём недели
cultureInfo.WEEKMS = 1000 * 60 * 60 * 24 * 7; // Количество миллисекунд в неделе
cultureInfo.LCID = 1049; //Код локали в LCID
// Текст в визуальных компонентах будем располагать по правому краю
cultureInfo.IsRTL = false;
// Укажем путь к корневой папке, содержащей файлы ресурсов
PP.resourceManager.setRootResourcesFolder("../resources/");
// Применим региональные настройки
PP.setCurrentCulture(cultureInfo);
// Определим дату
var date = new Date(2013, 8, 25);
console.log("Заданная дата: " + date.toString());
// Зададим полные наименования дней недели
cultureInfo.DayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// Определим день недели
var day = cultureInfo.DayNames[date.getDay() - 1];
console.log("День недели: " + day);
// Зададим полные наименования месяцев
cultureInfo.MonthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
// Зададим сокращённые наименования месяцев
cultureInfo.ShortMonthNames = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
        "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
];
// Определим месяц для заданной даты
var month = date.getMonth();
console.log("Месяц: " + cultureInfo.MonthNames[month]);
console.log("Сокращённое наименование месяца: " + cultureInfo.ShortMonthNames[month]);
// Зададим наименования кварталов
cultureInfo.QuarterNames = ["I", "II", "III", "IV"];
// Определим квартал для заданной даты
var quarter = ((month + 1) / 4 | 0);
console.log("Квартал года: " + cultureInfo.QuarterNames[quarter]);
// Зададим наименования полугодий
cultureInfo.HalfYearNames = ["I", "II"];
// Определим полугодие для заданной даты
var halfYear = (month - 1) / 6 | 0;
console.log("Номер полугодия: " + cultureInfo.HalfYearNames[halfYear]);

В результате выполнения примера был создан новый объект класса [CultureInfo](CultureInfo.htm),
 задающий русский язык и его региональные параметры. Также по дате 25 сентября
 2013 года были получены соответствующие ей наименования дня недели, месяца,
 квартала и полугодия:


Заданная дата: Wed Sep 25 2017 00:00:00 GMT+0400
 (Московское время (зима))

День недели: Среда

Месяц: Сентябрь

Сокращённое наименование месяца: Сен

Квартал года: III

Номер полугодия: II


См. также:


[CultureInfo](CultureInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
