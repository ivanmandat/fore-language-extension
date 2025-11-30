# MSModuleObject.getReport

MSModuleObject.getReport
-


# MSModuleObject.getReport


## Синтаксис


getReport();


## Описание


Метод getReport возвращает источник
 данных контейнера моделирования.


## Комментарии


Метод возвращает значение типа PP.Ms.MBObject.Problem.


## Пример


Для выполнения примера необходимо, чтобы была открыта любая модель,
 а указанный ниже сценарий был запущен в консоли браузера.


Определим тип контейнера моделирования, загруженного в модуль, и тип
 источника данных:


// Получим объект текущего модуля
var moduleObject = PP.App.getModuleObject();
// Получим контейнер, загруженный в модуль
var reportBox = moduleObject.getReportBox();
console.log("Тип контейнера: " + reportBox.getTypeName());
// Получим источник данных
var source = moduleObject.getSource();
console.log("Тип источника данных: " + source.getTypeName());
В результате выполнения примера в консоли браузера был выведен тип контейнера
 моделирования, загруженного в модуль, и тип источника данных модели:


Тип контейнера: ModelBox


Тип источника данных: Problem


См. также:


[MSModuleObject](MSModuleObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
