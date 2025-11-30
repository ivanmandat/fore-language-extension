# Конструктор PCObject

Конструктор PCObject
-


# Конструктор PCObject


## Синтаксис


PP.Ui.PCObject(settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор PCObject создает
 элемент диаграммы.


## Комментарии


Для реализации примера необходимо наличие компонента [ParallelCoordinates](../../../Components/ParallelCoordinates/ParallelCoordinates.htm)
 с наименованием «coord» (см. «[Пример
 создания компонента ParallelCoordinates](../../../Components/ParallelCoordinates/Example_ParallelCoordinates.htm)»). Создадим новый элемент
 диаграммы и получим заголовок первого источника данных диаграммы:


// Создаем объект
var obj = new PP.Ui.PCObject({
    Chart: coord
});
// Получаем заголовок первого источника данных диаграммы
console.log("Заголовок первого источника данных диаграммы: " + obj.getName());
В результате в консоль будет выведен заголовок первого источника данных
 диаграммы:


Заголовок первого источника данных диаграммы: DataSource
 with custom attributes


См. также:


[PCObject](PCObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
