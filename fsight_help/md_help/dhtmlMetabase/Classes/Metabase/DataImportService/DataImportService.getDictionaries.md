# DataImportService.getDictionaries

DataImportService.getDictionaries
-


# DataImportService.getDictionaries


## Синтаксис


getDictionaries (isCalendar, parentIfNotCalendar)


## Параметры


isCalendar. Определяет, будут
 возвращаться табличные или календарные справочники. Если установлено значение
 true - календарные, если false - табличные;


parentIfNotCalendar. Родитель
 табличного справочника - JSON-объект, представляющий из себя структуру
 Od. Актуально, если для параметра isCalendar
 установлено значение false.


## Описание


Метод getDictionaries возвращает
 справочники репозитория.


## Пример


Для выполнения примера в теге HEAD html-страницы добавьте ссылки на
 следующие js и css-файлы:


	- PP.js;


	- PP.Metabase.js;


	- файл с ресурсами (например, resources.ru);


	- PP.css.


В теге SCRIPT добавьте следующий скрипт:


    //соединение с репозиторием
    var mb = new PP.Mb.Metabase(
	{
	    PPServiceUrl: "PPService.axd?action=proxy",
	    Id: "WAREHOUSE",
	    UserCreds: { UserName: "sa", Password: "Qwerty1" }
	});
    mb.open();
    //сервис для работы с объектом импорта
    var dataImportService = new PP.Mb.DataImportService({ Metabase: mb });
    dataImportService.[GetObjectsCompleted](DataImportService.GetObjectsCompleted.htm).add(onObjectsLoaded);
    // запрашиваем объекты:
    //все календарные справочники
    dataImportService.getDictionaries(true);
    //все папки
    dataImportService.[getFolders](DataImportService.getFolders.htm)();
    //все репозитории НСИ
    dataImportService.[getRepositories](DataImportService.getRepositories.htm)();
    function onObjectsLoaded(sender, args)
     {
         var objs = args.Objects;
         for (var i = 0; i < objs.length; i++)
          {
          // в консоль браузера будут выведены названия и ключи полученных объектов
              console.log(objs[i].n + (" ")+ objs[i].k)
          }
     }

После выполнения примера будут получены все календарные справочники,
 папки и репозитории НСИ выбранного репозитория. Их названия и ключи будут
 выведены в консоль браузера.


См. также:


[DataImportService](DataImportService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
