# ResourceManager.String

ResourceManager.String
-


# ResourceManager.String


## Синтаксис


String: String;


## Описание


Свойство String определяет строку
 для указанного языка, ресурсного ключа и имени поля.


## Комментарии


Значение свойства устанавливается с помощью метода setString.
 При этом указываются следующие параметры: value - значение строки, culture
 - объект типа [PP.CultureInfo](../CultureInfo/CultureInfo.htm),
 resourceKey - ресурсный ключ, fieldName - наименование поля или массив
 имён. Из JSON значение установить нельзя.


Возвращается значение с помощью метода getString.
 В нём указываются либо два параметра - fieldName (имя поля) и resourceKey
 (ресурсный ключ), либо один параметр - resourceKey.


## Пример


Перед выполнением примера необходимо запустить сценарий, приведённый
 на странице описания свойства [ResourceManager.RootResourcesFolder](ResourceManager.RootResourcesFolder.htm).
 Получим строки по ресурсным ключам «login», «dateTimeEditMonthNames1»,
 «ExpressPropertyBubbleChart» для русского и английского языка, а также
 обработаем событие [StartupSetLoaded](ResourceManager.StartupSetLoaded.htm),
 выполнив следующий пример в консоли браузера:


// Обработаем событие StartupSetLoaded
PP.resourceManager.StartupSetLoaded.add(function (sender, args) {
    console.log("Подключены все файлы ресурсов для текущего языка");
});
// Установим собственные ресурсы
PP.resourceManager.setString("Имя пользователя", PP.Cultures.ru, "login");
PP.resourceManager.setStrings([
    ["User name", PP.Cultures.en, "login"]
]);
console.log("Текущий язык - русский");
// Установим русский язык текущим
PP.setCurrentCulture(PP.Cultures.ru);
// Получим наименование поля «Login» по ресурсному ключу «login»
console.log(PP.resourceManager.getString("login"));
// Ресурсы из файла PP.resources.ru.js
console.log(PP.resourceManager.getString("dateTimeEditMonthNames1"));
// Ресурсы из файла Express.resources.ru.js
console.log(PP.resourceManager.getString("Content", "ExpressPropertyBubbleChart"));
console.log("");
console.log("Текущий язык - английский");
// Сделаем английский язык текущим
PP.setCurrentCulture(PP.Cultures.en);
// Получим наименование поля «Login» по ресурсному ключу «login»
console.log(PP.resourceManager.getString("login"));
// Ресурсы из файла PP.resources.en.js
console.log(PP.resourceManager.getString("dateTimeEditMonthNames1"));
// Ресурсы из файла Express.resources.en.js
console.log(PP.resourceManager.getString("Content", "ExpressPropertyBubbleChart"));
В результате выполнения примера в консоли браузера были выведены строки
 по ресурсным ключам «login», «dateTimeEditMonthNames1», «ExpressPropertyBubbleChart»
 для русского и английского языка, а также уведомления о том, что подключены
 все файлы ресурсов, выводимые после каждой смене текущего языка:


Текущий язык - русский

Подключены все файлы ресурсов для текущего языка

Имя пользователя

январь

Матрица


Текущий язык - английский

Подключены все файлы ресурсов для текущего языка

User name

January

Bubble chart


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
