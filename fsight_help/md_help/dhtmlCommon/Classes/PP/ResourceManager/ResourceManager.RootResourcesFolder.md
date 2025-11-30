# ResourceManager.RootResourcesFolder

ResourceManager.RootResourcesFolder
-


# ResourceManager.RootResourcesFolder


## Синтаксис


RootResourcesFolder: String;


## Описание


Свойство RootResourcesFolder определяет корневую папку, содержащую файлы ресурсов.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setRootResourcesFolder.


## Пример


Для выполнения примера необходимо создать html-страницу и в теге <head> добавить ссылку на файл PP.js. В родительском каталоге для текущей корневой папки должна быть размещена папка с файлами ресурсов resources. Загрузим на страницу ресурсы для русского и английского языка, а также обработаем события [ResourceFileLoaded](ResourceManager.ResourceFileLoaded.htm) и [ResourcesLoaded](ResourceManager.ResourcesLoaded.htm), выполнив следующий сценарий в консоли браузера:


// Укажем путь к корневой папке, содержащей файлы ресурсов
PP.resourceManager.setRootResourcesFolder("../resources/", false);
// Определим список файлов ресурсов
PP.resourceManager.setResourceList(["PP"]);
PP.resourceManager.addToResourceList(["Express"]);
// Обработаем событие ResourceFileLoaded
PP.resourceManager.ResourceFileLoaded.add(function (sender, args) {
    console.log("Загружен файл ресурсов " + args.Name + ".resources." + args.Culture.CultureName + ".js");
});
// Обработаем событие ResourcesLoaded
PP.resourceManager.ResourcesLoaded.add(function (sender, args) {
    console.log("Загружены все ресурсы из файла");
});
if (PP.resourceManager.isResourceFilesAttached() == null) {
    // Подключим файлы ресурсов для русского языка
    PP.resourceManager.attachResourceFiles(PP.Cultures.ru);
    if (PP.resourceManager.isResourceFileAttached("res_ru")) {
        console.log("Подключены ресурсы для локали ru");
    };
    // Подключим файлы ресурсов для английского языка
    PP.resourceManager.attachResourceFiles(PP.Cultures.en);
    if (PP.resourceManager.isResourceFileAttached("res_en")) {
        console.log("Подключены ресурсы для локали en");
    }
};

После выполнения примера были загружены ресурсы для русского и английского языка, о чем свидетельствуют сообщения, выведенные в консоли браузера:


Подключены ресурсы для локали ru


Подключены ресурсы для локали en


Более подробные сообщения были выведены в результате обработки событий [ResourceFileLoaded](ResourceManager.ResourceFileLoaded.htm) и [ResourcesLoaded](ResourceManager.ResourcesLoaded.htm):


Загружен файл ресурсов PP.resources.ru.js


Загружены все ресурсы из файла


Загружен файл ресурсов Express.resources.ru.js


Загружены все ресурсы из файла


Загружен файл ресурсов PP.resources.en.js


Загружены все ресурсы из файла


Загружен файл ресурсов Express.resources.en.js


См. также:


[ResourceManager](ResourceManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
