# PP.getProperty

PP.getProperty
-


**


# PP.getProperty


## Синтаксис


getProperty(context: Object, selector: String, asPPObj: Boolean);


## Параметры


*context.* Исходный JSON-объект;


*selector.* Строка, содержащая последовательность вложенных свойств.


## Описание


Метод getProperty** определяет значение вложенного свойства JSON-объекта.


## Комментарии


Если какой-либо вложенный объект не существует, то метод возвратит значение undefined.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Создадим объект, а затем установим и выведем значения новых свойств вложенного в него объекта:


// Определим объект
var chartView = {
    chartType: "pie"
};
if (PP.isObject(chartView)) {
    // Установим значения свойств width и height
    PP.setValueToJSON(10, chartView, "options.size.width");
    PP.setValueToJSON(20, chartView, "options.size.height");
    // Получим значение свойств width и height
    console.log("Значение свойства width: " + PP.getProperty(chartView, "options.size.width"));
    console.log("Значение свойства height: " + PP.getProperty(chartView, "options.size.height"));
} else {
    console.log("Указанное значение не является объектом.");
};

В результате выполнения примера в консоли браузера были выведены значения новых свойств width и height, вложенных в исходный объект:


Значение свойства width: 10


Значение свойства height: 20


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
