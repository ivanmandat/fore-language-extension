# PP.removePropertyFromJSON

PP.removePropertyFromJSON
-


# PP.removePropertyFromJSON


## Синтаксис


removePropertyFromJSON(propertyName: String, json: Object);


## Параметры


*propertyName.* Свойство объекта, которое требуется удалить;


*json.* Исходный объект.


## Описание


Метод removePropertyFromJSON удаляет указанное свойство из JSON-объекта.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Создадим JSON-объект и удалим одно из трёх его свойств:


// Создадим исходный объект
var chart = {
    chartType: "pie",
    editMode: 0,
    options: "selected"
};
var getProperties = function (obj) {
    // Выведем список значений свойств объекта
    var result = "";
    for (var i in obj) {
        result += obj[i];
        result += " "
    };
    return result;
}
console.log("Значения свойств исходного объекта: " + this.getProperties(chart));
// Удалим свойство «chartType» у объекта
PP.removePropertyFromJSON("chartType", chart);
console.log("Значения свойств изменённого объекта: " + this.getProperties(chart));

В результате выполнения примера в консоли браузера был выведен список значений свойств созданного объекта до и после удаления поля «chartType», равного строке «pie»:


Значения свойств исходного объекта: pie 0 selected


Значения свойств изменённого объекта: 0 selected


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
