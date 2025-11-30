# PP.getFirstMember

PP.getFirstMember
-


**


# PP.getFirstMember


## Синтаксис


getFirstMember(obj: Object);


## Параметры


*obj.* JSON-объект, для первого члена которого нужно определить наименование.


## Описание


Метод getFirstMember** определяет наименование первого члена объекта.


## Комментарии


Метод возвращает значение типа String.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Получим наименования и значение первого члена объекта:


// Определим объект
var chartView = {
    chartType: PP.getRandomString(7),
    editMode: 0,
    selectionEnabled: true,
};
// Получим наименование и значение первого члена объекта
var name = PP.getFirstMember(chartView);
var value = PP.getFirstValue(chartView);
if (PP.isDefined(value)) {
    console.log("Значение первого члена «" + name + "» равно «" + value + "».");
} else {
    console.log("Значение первого члена «" + name + "» не определено.");
};

В результате выполнения примера в консоли браузера было выведено наименование и значение первого члена объекта:


Значение первого члена «chartType» равно «EebzKbD».


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
