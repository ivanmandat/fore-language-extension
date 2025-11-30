# ResourceManager.load

ResourceManager.load
-


# ResourceManager.load


## Синтаксис


load(resourcesList: String, cultureInfo: [PP.CultureInfo](../CultureInfo/CultureInfo.htm), callback: PP.Delegate|function);


## Параметры


resNamesArray. Список наименований ресурсных файлов, разделённых запятыми (должна быть указана крайняя левая часть названия файла);


cultureInfo. Язык и региональные параметры;


callback. Возвратная функция.


## Описание


Метод load загружает ресурсные файлы, представленные в виде строки с разделителем через запятую.


## Пример


Для выполнения примера необходимо создать html-страницу и в теге <head> добавить ссылку на файл PP.js. В родительском каталоге для текущей корневой папки должна быть размещена папка с файлами ресурсов resources. Загрузим на страницу ресурсные файлы с крайней левой частью «PP» для русского и английского языка, выполнив следующий сценарий в консоли браузера:


// Создадим объект менеджера ресурсов
var resourceManager = new PP.ResourceManager();
PP.resourceManager = resourceManager;
// Укажем путь к корневой папке, содержащей файлы ресурсов
resourceManager.setRootResourcesFolder("../resources/", false);
resourceManager.load("PP", PP.Cultures.ru, function () {
    console.log("Загружены ресурсные файлы для русского языка");
});
resourceManager.load("PP", PP.Cultures.en, function () {
    console.log("Загружены ресурсные файлы для английского языка");
});

В результате выполнения примера в консоли браузера были выведены уведомления о загрузке ресурсных файлов для русского и английского языков. Проверим это, запустив на выполнение следующий сценарий:


var userProc = function () {
    // Установим русский язык текущим
    PP.setCurrentCulture(PP.Cultures.ru);
    // Получим строку по ресурсному ключу «dateTimeEditMonthNames1» для русского языка
    var str1 = resourceManager.getString("dateTimeEditMonthNames1");
    if (str1 != "") {
        console.log("Строка по ключу «dateTimeEditMonthNames1» для русского языка: " + str1);
    } else {
        console.log("Строка по ключу «dateTimeEditMonthNames1» для русского языка не определена");
    };
    // Сделаем английский язык текущим
    PP.setCurrentCulture(PP.Cultures.en);
    // Получим строку по ресурсному ключу «dateTimeEditMonthNames1» для английского языка
    var str2 = resourceManager.getString("dateTimeEditMonthNames1");
    if (str2 != "") {
        console.log("Строка по ключу «dateTimeEditMonthNames1» для английского языка: " + str2);
    } else {
        console.log("Строка по ключу «dateTimeEditMonthNames1» для английского языка не определена");
    };
}
// Определим строку по ключу «dateTimeEditMonthNames1» на разных языках
userProc();

После выполнения примера в консоли браузера было выведено значение, соответствующее ресурсному ключу «dateTimeEditMonthNames1» для русского и английского языка:


Строка по ключу «dateTimeEditMonthNames1» для русского языка: январь


Строка по ключу «dateTimeEditMonthNames1» для английского языка: January


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
