# TabSheet.getGridBorderWidth

TabSheet.getGridBorderWidth
-


**


# TabSheet.getGridBorderWidth


## Синтаксис


getGridBorderWidth();


## Описание


Метод getGridBorderWidth** возвращает ширину сетки таблицы.


## Комментарии


Метод возвращает значение 1, если сетка таблицы видима, и значение 0, если она невидима.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим текущее значение ширины сетки таблицы:


var width = tabSheet.getGridBorderWidth();
console.log("Ширина сетки: " + width);

В результате выполнения примера в консоли браузера была выведена ширина сетки, равная 1. Это означает, что сетка в данный момент отображена.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
