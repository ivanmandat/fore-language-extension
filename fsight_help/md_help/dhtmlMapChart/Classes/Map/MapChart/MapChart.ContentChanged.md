# MapChart.ContentChanged

MapChart.ContentChanged
-


# MapChart.ContentChanged


## Синтаксис


ContentChanged: function(sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ContentChanged наступает
 после изменения содержимого карты.


## Комментарии


Событие может наступать, например, при изменении выделения объектов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием
 «map» (см. «[Пример
 создания компонента MapChart](../../../Components/MapChart/MapChart_Example.htm)»).


// Добавим событие
map.ContentChanged.add(function(sender, args){
console.log("Событие ContentChanged");
});
// Вызовем событие
map.requestContentChanged();
В результате выполнения примера было добавлено и вызвано новое событие.


См. также:


[MapChart](MapChart.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
